const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
} = require("@azure/storage-blob");
const uuidv1 = require("uuid/v1");

//define multer
const multer = require("multer");
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).array("images");

// configure storage
const accountName = process.env.AZURE_ACCOUNT_NAME;
const accountKey = process.env.AZURE_ACCOUNT_KEY;
const sharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey,
);
const pipeline = newPipeline(sharedKeyCredential);
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  pipeline,
);
const uploadOptions = { bufferSize: 4 * 1024 * 1024, maxConcurrency: 20 };
const getStream = require("into-stream");
const contanierName = "image";

const fileUpload = async(req, res, next) => {
  let images = [];
  try {
    await req.files.forEach(async (reqfile, i) => {
      const blobName =  uuidv1() + "-" + reqfile.originalname;

      images.push(blobName)
      const stream = getStream(reqfile.buffer);
      const containerClient = blobServiceClient.getContainerClient(
        contanierName,
      );
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

     let resdata = await blockBlobClient.uploadStream(
        stream,
        uploadOptions.bufferSize,
        uploadOptions.maxConcurrency,
        { blobHTTPHeaders: { blobContentType: reqfile.mimetype } },
      );

    });
    res.status(200).json(images);
  } catch (err) {
    console.log(err)
  }
};
module.exports = fileUpload;
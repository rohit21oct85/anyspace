const {
    BlobServiceClient,
    StorageSharedKeyCredential,
    newPipeline,
  } = require("@azure/storage-blob");


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

  const contanierName = "image";

  const deleteFile = async (req, res, next) => {
    let images = [];
    try {
      await req.body.imageToRemove.forEach(async (reqfile, i) => {
        const blobName =  reqfile;

        images.push(blobName)

        const containerClient = blobServiceClient.getContainerClient(
          contanierName,
        );
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

       let resdata = await blockBlobClient.delete(blobName);
        console.log(resdata)

      });
      res.status(200).json(images);
    } catch (err) {
      console.log(err)
    }
  };
  module.exports = deleteFile;
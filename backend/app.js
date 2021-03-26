
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const multer = require('multer');

const compression = require("compression");

mongoose.Promise = global.Promise;


const index = require('./routes/index');
const admin = require("./routes/admin");
const sitemap = require("./routes/sitemapRouter")

const app = express();
app.use(compression())
app.use(helmet());
app.use(bodyParser.json({limit: '50mb'}));

app.use(multer({ dest: 'uploads/' }).any())

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use(express.static('public'));

app.use('/favicon.ico', express.static('images/favicon.ico'));
app.use('/api/', index);
app.use('/admin/', admin);

app.get("/sitemap.xml", sitemap)
app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});



let mongoURI= null;
if(process.env.PORT == 5000){
  mongoURI= `mongodb://${process.env.DB_NAME}:${process.env.DB_KEY}@${process.env.DB_NAME}.mongo.cosmos.azure.com:${process.env.DB_PORT}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@anyspazedb@`;
}else{
   mongoURI= `mongodb://${process.env.DB_NAME}:${process.env.DB_KEY}@${process.env.DB_NAME}.mongo.cosmos.azure.com:${process.env.DB_PORT}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@anyspazedb@`;

}
mongoose.connect(mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
  })
  .then(() => {
    app.listen(process.env.PORT);
    console.info(`app is running at ${process.env.PORT} on ${process.env.MODE} mode`)
  })
  .catch(err => {
    console.log(err);

  });

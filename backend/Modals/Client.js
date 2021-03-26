const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  "client_image": { type: String , required: true},
});

module.exports = mongoose.model('Client', clientSchema);
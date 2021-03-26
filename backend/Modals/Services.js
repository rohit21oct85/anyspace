const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  "name": { type: String , required: true},
  "slug": { type: String , required: true},
  "image": { type: String },
  "created_at": { type: Date },
});

module.exports = mongoose.model('Services', serviceSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IndustrySchema = new Schema({
  "name": { type: String , required: true},
  "slug": { type: String , required: true},
  "created_at": { type: Date },
});

module.exports = mongoose.model('Industry', IndustrySchema);
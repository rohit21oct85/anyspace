const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TesnimonialSchema = new Schema({
  "client_image": { type: String , required: true},
  "client_name": { type: String , required: true},
  "client_company": { type: String , required: true},
  "client_message": { type: String , required: true},
  "client_rating": { type: String},
});

module.exports = mongoose.model('Testimonial', TesnimonialSchema);
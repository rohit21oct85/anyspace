const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationContentSchema = new Schema({
  "location": { type: String , required: true}, 
  "slider_image_1": { type: String , required: true}, 
  "slider_image_2": { type: String , required: true}, 
  "slider_image_3": { type: String , required: true}, 
  "slider_image_4": { type: String , required: true}, 
  "bottom_content": { type: String , required: true}, 
  "top_content": { type: String , required: true}, 
});

module.exports = mongoose.model('LocationContent', LocationContentSchema);
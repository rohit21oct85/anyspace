const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IndustryContentSchema = new Schema({
  "slug": { type: String , required: true}, 
  "banner_image": { type: String , required: true}, 
  "bottom_content": { type: String , required: true}, 
  "heading_bottom": { type: String , required: true}, 
  "heading_middle": { type: String , required: true}, 
  "heading_top": { type: String , required: true}, 
  "middle_content": { type: String , required: true}, 
  "top_content": { type: String , required: true}, 
});

module.exports = mongoose.model('IndustryContent', IndustryContentSchema);
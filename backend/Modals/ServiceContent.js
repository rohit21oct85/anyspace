const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceContentSchema = new Schema({
  "url": { type: String , required: true},
  "heading": { type: String , required: true},
  "overview": { type: String , required: true},
  "stats": { type: String , required: true},
  "stats_image": { type: String },
  "how_top_content": { type: String , required: true},
  "how_image": { type: String , required: true},
  "headmask_image": { type: String , required: true},
  "how_bottom_content": { type: String , required: true},
  "whyus_content": { type: String , required: true},
  "pointer_one_heading": { type: String , required: true},
  "pointer_one_content": { type: String , required: true},
  "pointer_two_heading": { type: String , required: true},
  "pointer_two_content": { type: String , required: true},
  "pointer_three_heading": { type: String , required: true},
  "pointer_three_content": { type: String , required: true},
  "pointer_four_heading": { type: String , required: true},
  "pointer_four_content": { type: String , required: true},
  
  "keybenifit_one_heading": { type: String , required: true},
  "keybenifit_one_content": { type: String , required: true},
  
  "keybenifit_two_heading": { type: String , required: true},
  "keybenifit_two_content": { type: String , required: true},
  
  "keybenifit_three_heading": { type: String , required: true},
  "keybenifit_three_content": { type: String , required: true},
  
  "created_at": { type: Date },
});

module.exports = mongoose.model('ServiceContent', ServiceContentSchema);
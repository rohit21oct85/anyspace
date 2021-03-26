const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  "title": { type: String , required: true},
  "slug": { type: String , required: true},
  "description": { type: String , required: true},
  "category": { type: String , required: true},
  "blog_alt_tag": {type: String},
  "image": { type: String },
  "userId": { type: String },
  "created_at": { type: Date, default: Date.now},
});

module.exports = mongoose.model('Blogs', blogSchema);
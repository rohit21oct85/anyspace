const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeoTagSchema = new Schema({
  "url": { type: String , required: true},
  "meta_title": { type: String , required: true},
  "meta_description": { type: String , required: true},
  "keywords": {type: String},
  "alt_tag": { type: String},
  "canonical_tag": { type: String},
  "meta_twitter": { type: String},
  "meta_twitter_card": { type: String},
  "meta_twitter_site": { type: String},
  "meta_twitter_title": { type: String},
  "meta_twitter_description": { type: String},
  "og_url": { type: String},
  "og_site_name": { type: String},
  "robots": { type: String},
  "created_at": { type: Date, Default: new Date().toLocaleDateString()},
});

module.exports = mongoose.model('SeoTags', SeoTagSchema);
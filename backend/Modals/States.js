const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stateSchema = new Schema({
  "code": { type: String },
  "name": { type: String },
  "pageHtml": { type: String },
  "pageCSS": { type: String },
  "slug": { type: String },
  "cities": { type: Array }
});



module.exports = mongoose.model('State', stateSchema);

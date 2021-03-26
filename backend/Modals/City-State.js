const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cityStateSchema = new Schema({
  city: { type: String },
  state:{type:String}

});

cityStateSchema.index({
  city: "text",
  state:"text"
})

module.exports = mongoose.model('CityState', cityStateSchema);

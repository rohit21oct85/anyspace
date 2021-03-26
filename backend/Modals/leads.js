const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leadSchema = new Schema({
  name: { type: String, required: true },

  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  mobile: { type: Number ,required: true},
  message: { type: String},
  warehouseId:{type:String},
  status:{type:String, default:"Open"}

});

module.exports = mongoose.model('Lead', leadSchema);

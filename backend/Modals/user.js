const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },

  email: {
    type: String, required: true, unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, required: true, minlength: 6 },
  companyName: { type: String },
  mobile: { type: String },
  gst:{type:String},
  billingAddress: {
    addressline1: { type: String },
    addressline2: { type: String },
    addressline3: { type: String },
    city: { type: String },
    state: { type: String },
    pin:{type:String}

  },
  resetPWToken:{type:String},
  resetPWTokenExpiry:{type:String},
  shortListed: {type:Array},
  photoRequested: {type:Array},
  status:{type:String, default:"enabled"}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

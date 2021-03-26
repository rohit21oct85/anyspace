const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const callSchema = new Schema({

    fullname: { type: String, required: true },
    email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    mobile: { type: Number ,required: true},
    requirement: { type: String},
    status:{type:String, default:"Open"}

});

module.exports = mongoose.model('Call', callSchema);

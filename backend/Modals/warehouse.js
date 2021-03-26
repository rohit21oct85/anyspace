const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: {
    type: [Number]
  }
});
const warehouseSchema = new Schema({
  warehouseName: { type: String, required: true },
  Addressline1: { type: String, required: true },
  Addressline2: { type: String },
  Addressline3: { type: String },
  city: { type: String },
  state: { type: String },
  pin: { type: String, maxlength: 6 },
  warehouseSpace: { type: Number, required: true },
  shippingStart: { type: String, required: true },
  shippingEnd: { type: String, required: true },
  shippingNotes: { type: String },
  racking: { type: String },
  rackPosAvilable: { type: Number },
  maxPalletHeight: { type: String },
  maxRackWeight: { type: String },
  rackCostPerPallet: { type: Number },
  avilableFLoor: { type: Number },
  floorPricePerPallet: { type: Number },
  sfPricePerPallet: { type: Number },
  userId: { type: String },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number]
    }
  },
  internalName: { type: String },
  wareHouseDesc: { type: String },
  images: { type: Array },
  slug: { type: String },
  views: { type: Number, default: 0 },
  contacted: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  airportDistance: { type: Number },
  seaportDistance: { type: Number },
  dryportDistance: { type: Number },
  warehouseType: { type: String },
  FSSAIApproved: { type: String },
  drugLicensed: { type: String },
  exciseApproved: { type: String },
  security: { type: String },
  CCTVSurveillance: { type: String },
  fireExtinguishers: { type: String },
  PowerBackupGenerator: { type: String },
  handPalletTrolley: { type: String },
  forkLift: { type: String },
  woodenPallet: { type: String },
  shrinkWrap: { type: String },
  internetleasedline: { type: String },
  wmsSoftware: { type: String },
  manualMIS: { type: String },
  barcoding: { type: String },
  status: { type: String, default: 2 }, // 1 active, 2 inactive 3 archived
  PerSquareFtRate: { type: Number },
  electricityLoad: { type: String },
  numberOfDocs: { type: Number },
  Skylight: { type: String },
  turbovents: { type: String },
  parkingArea: { type: String }

});

warehouseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Warehouse', warehouseSchema);

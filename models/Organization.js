const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  password:{
    type: String,
    required: true
  },
  maxOccupancy: {
    type: Number,
    required: true
  },
  currentOccupancy: {
    type: Number,
    default: 1,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

})

const Organization = mongoose.model('organizations', OrganizationSchema);
module.exports = Organization;
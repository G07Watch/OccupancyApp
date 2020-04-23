const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : ''
  data.email = validText(data.email) ? data.email : ''
  data.address = validText(data.address) ? data.address: ''
  data.password = validText(data.password) ? data.password : ''
  data.password2 = validText(data.password2) ? data.password2 : ''
  data.maxOccupancy = Validator.isNumeric(data.maxOccupancy) ? data.maxOccupancy : ''
  data.currentOccupancy = Validator.isNumeric(data.currentOccupancy) ? data.currentOccupancy : ''

  if (!Validator.isLength(data.name, {min: 2, max: 30})){
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)){
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(data.email)){
    errors.email = "Email is required";
  }

  if (!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be between 8 and 30 characters";
  }

  if (!Validator.equals(data.password, data.password2)){
    errors.password2 = "Passwords must match";
  }

  if (!Validator.isNumeric(data.maxOccupancy)){
    errors.maxOccupancy = "Maximum occupancy must be a valid number";
  }

  if (!Validator.isNumeric(data.currentOccupancy)){
    errors.currentOccupancy = "Current occupancy must be a valid number";
  }

  return {
    errors,
    isValid: Object.keys(errors.length) === 0
  }
}
const express = require('express');
const org = express.Router();
const validateRegister = require('../../validation/register');
const validateLogin = require('../../validation/login');

org.get('/test', (req, res) => {
  res.json ({ msg: "This is the organization route"});
});

module.exports = org;
const express = require('express');
const org = express.Router();

org.get('/test', (req, res) => {
  res.json ({ msg: "This is the organization route"});
});

module.exports = org;
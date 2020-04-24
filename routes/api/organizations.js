const express = require('express');
const org = express.Router();
const Organization = require('../../models/Organization')
const validateRegister = require('../../validation/register');
const validateLogin = require('../../validation/login');

org.get('/test', (req, res) => {
  res.json ({ msg: "This is the organization route"});
});

org.post('/register', (req, res) => {
  Organization.findOne({
    email: req.body.email
  })
  .then(org => {
    if (org) {
      return res.status(400).json({email: "An organization is already registered with that email"})
    } else {
      const newOrganization = new Organization({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        maxOccupancy: req.body.maxOccupancy,
        currentOccupancy: req.body.currentOccupancy,
      })

      newOrganization.save()
      .then(org => res.send(org))
      .catch(error => res.send(error));
    }
  })
})

module.exports = org;
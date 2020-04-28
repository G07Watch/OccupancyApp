const express = require('express');
const org = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const keys = require("../../config/keys_dev");

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


      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newOrganization.password, salt, (err, hash) => {
          if (err) throw err;
          newOrganization.password = hash;
          newOrganization
            .save()
            .then(org => {
              const payload = {
                id: organizaion.id,
                name: org.name
              };

              jwt.sign(payload,
                keys.secretOrKey,
                { expiresIn: 14400 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
            })
            .catch(err => console.log(err));
        });
      });

      newOrganization.save()
      .then(org => res.send(org))
      .catch(error => res.send(error));
    }
  })
})

org.post('/login', (req, res) => {

  const { errors, isValid } = validateLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Organization.findOne({ email })
  .then(org => {
    if(!org){
      errors.org = 'Wrong email/password combo';
      return res.status(422).json({ email: 'Wrong email/password combo' })
    }

    bcrypt.compare(password, org.password)
      .then(isMatch => {

        if(isMatch) {
          const payload = {
            id: org.id,
            name: org.name
          };

          jwt.sign(
            payload,
            keys.secretOrKey,
            // Tell the key to expire in four hours
            { expiresIn: 14400 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
        } else {
          res.status(422).json({ errors: { email: 'Wrong email/password combo' } });
        }

      })

  })
})

module.exports = org;
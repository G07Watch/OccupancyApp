const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Organization = mongoose.model('organizations');
const keys=require('./keys_dev');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      Organization.findById(jwt_payload.id)
        .then(org => {
          if (org) {
            // return the org to the frontend
            return done(null, org);
          }
          // return false since there is no org
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys_dev').mongoURI;
const org = require('./routes/api/organizations');
const Organization = require('./models/Organization');

const appGet = app.get;

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) =>{
  const org = new Organization ({
    name: 'First',
    email: 'first@first.com',
    address: '1 First Street',
    password: '123password',
    maxOccupancy: '10',
    currentOccupancy: '1'
  })
  org.save();
  res.send("Hi World!");
});

app.use('/api/org', org)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running
  on port ${port}`));

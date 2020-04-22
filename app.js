const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys_dev').mongoURI;

console.log("app:", app);
const appGet = app.get;
console.log("app.get:", appGet);

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) =>{
  console.log(res)
  res.send("Hi World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running
  on port ${port}`));

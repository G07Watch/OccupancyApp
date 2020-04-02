const fetch = require('node-fetch');
const {secretOrKey} = require('../config/keys_dev.js');


const authorization = {
  'Authorization': secretOrKey
}


const headers = new fetch.Headers(authorization);

const fetchBusiness = async (name,location) => {

  let response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${name}&location=${location}`,{
    method: "GET", headers: headers
  })
  .then (res => res.json())
  .then (json => json)
  .catch(error => console.error(error))

  return response;
}

module.exports = { fetchBusiness }
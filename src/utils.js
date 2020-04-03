const fetch = require('node-fetch');
const {secretOrKey} = require('../config/keys_dev.js');


const authorization = {
  'Authorization': secretOrKey,
  // 'Access-Control-Allow-Origin': 'https://api.yelp.com/',
  'Vary': 'Origin'
}


const headers = new fetch.Headers(authorization);

const fetchBusiness = async (name,location) => {

  let response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${name}&location=${location}`,{
      method: "GET", mode: 'no-cors', headers: headers
  })
  .then (res => res.json())
  .then (json => json)
  .catch(error => error);

  return response;
}

module.exports = { fetchBusiness }
/* const fetch = require('node-fetch');
const jsonp = require('jsonp'); 
const { secretOrKey } = require('../config/keys_dev.js');*/

/* let response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${name}&location=${location}`,{
      method: "GET",mode: 'no-cors', headers: headers
  }) 
const authorization = {
  'Authorization': secretOrKey,
  'Access-Control-Allow-Origin': 'https://api.yelp.com/',
  'Vary': 'Origin'
}


const headers = new fetch.Headers(authorization);

const fetchBusiness = async (name,location) => {

  const jsonpString = jsonp('https://api.yelp.com/v3/businesses/search?term=${name}&location=${location}');
  console.log('In fetchBusinessUtil');
  console.log(name);
  console.log(location);
  let response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${jsonpString}&location=${location}`,{
      method: "GET",mode: 'no-cors', headers: headers
  })
  .then (res => res.json())
  .then (json => json)
  .catch(error => error);

  console.log(response);
  return response;
}
*/
/* For testing Fetch
fetchBusiness('katz', 'New York City')
 */



/*module.exports = { fetchBusiness }*/
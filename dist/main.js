const {fetchBusiness} = require('../src/utils');

/* 
TEST fetchBusiness is returning proper data

const testFetch = async () => {
  console.log('in function');
  let response = await fetchBusiness("katzs delicatessen", "New York City")
  .then(response => response.businesses)
  .then(first => first[0])
  .then(company => company.id);
  console.log('in async');
  console.log(response);
  return response;
}

console.log("ran main.js")
console.log(testFetch());

RETURN first five company result names 

const testFetch = async () => {
  let response = await fetchBusiness("katzs delicatessen", "New York City")
  .then(response => response.businesses)
  .then(first => [...first[4]])
  .then(company => company.id);
  return response;
}

*/

const fetchCompanies = async (companyName, companyLocation) => {

  if((companyName != 'default') && (companyLocation != 'default')){
    let response = await fetchBusiness(companyName, companyLocation)
    // let response = await fetchBusiness('katz', 'New York City')
    .then(response => response.businesses)
    .then(businesses => businesses.slice(0, 5))
    .then(firstFive => firstFive.forEach(element => {
      
      console.log(element.name);
    }))
    .catch(error => console.error(error));
  }
    
  return;
}

// const companyName = document.getElementById("companyName");
// companyName.addEventListener("change", fetchCompanies(name, location = 'default'));
// const companyLocation = document.getElementById("companyLocation");
// companyLocation.addEventListener("change", fetchCompanies(name = 'default', location));

// fetchCompanies('hi', 'there');
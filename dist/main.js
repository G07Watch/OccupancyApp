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


ASYNC CONSOLE CHECK Version fetchCompanies

const fetchCompanies = async (companyName, companyLocation, searchResults) => {

  if((companyName != 'default') && (companyLocation != 'default')){
    let response = await fetchBusiness(companyName, companyLocation)
    // let response = await fetchBusiness('katz', 'New York City')
    .then(response => response.businesses)
    .then(businesses => businesses.slice(0, 5))
    .then(firstFive => firstFive.forEach(element => {

      console.log(element.name);
      searchResults.textContent = `${element.name}`
    }))
    .catch(error => console.error(error));
  }

  return;
}

*/

const fetchCompanies =  async(companyName, companyLocation, searchResults) => {
  console.log(companyLocation);
  console.log(companyName);


  if((companyName) && (companyLocation)){
    let response = await fetchBusiness(companyName, companyLocation)
      .then(res => res.businesses)
      .then(businesses => businesses.slice(0, 5))
      .then(firstFive => firstFive.map(element => { element.name }))
      .catch(error => console.error(error));

    console.log(response);
    searchResults.textContent = `${response}`;
  }
  

  return;
}
// companyName.addEventListener("change", ));
// companyLocation.addEventListener("change", fetchCompanies(name = 'default', location));

const companyName = document.getElementById("companyName").value; 
companyName.addEventListener("change", companyName)
const companyLocation = document.getElementById("companyLocation").value;
const searchResults = document.getElementById("searchResults");
const companySearch = document.getElementById("companySearch");

companySearch.addEventListener('submit', fetchCompanies(companyName, companyLocation, searchResults));
// console.log(companyLocation);
// console.log(companyName);
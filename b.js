// Get all the countries with a population of less than 2 lakhs using Filter function

let x = new XMLHttpRequest();
// const data=new Array();
console.log(x);
x.open("GET", "https://restcountries.com/v3.1/all");
x.send();
x.onload = function () {
  const data = JSON.parse(x.response);
  const pop_Country = data.filter((country) => country.population <200000);
  console.log(pop_Country);
};

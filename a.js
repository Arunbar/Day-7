// Get all the countries from Asia continent /region using Filter function

let x = new XMLHttpRequest();
// const data=new Array();
console.log(x);
x.open("GET", "https://restcountries.com/v3.1/all");
x.send();
x.onload = function () {
  const data = JSON.parse(x.response);
  const asiaCountry = data.filter((country) => country.region == "Asia");
  console.log(asiaCountry);
};

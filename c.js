// Print the following details name, capital, flag, using forEach function

let x = new XMLHttpRequest();
// const data=new Array();
console.log(x);
x.open("GET", "https://restcountries.com/v3.1/all");
x.send();
x.onload = function () {
  const data = JSON.parse(x.response);
  data.forEach(function(country){
    console.log("Name: ",country.name.common );
    console.log("Capital: ",country.capital);
    console.log("Flag:",country.flags.svg);
    console.log("------------------------------");
  });
};

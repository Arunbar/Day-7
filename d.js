// Print the total population of countries using reduce function

let x = new XMLHttpRequest();
// const data=new Array();
console.log(x);


x.open("GET", "https://restcountries.com/v3.1/all");
x.send();
x.onload = function () {
  const data = JSON.parse(x.response);
  console.log(data);
  // const tP=data.population;
  let total_population=data.reduce((acc,country)=>acc+country.population,0);
  console.log("total population: " + total_population);
};

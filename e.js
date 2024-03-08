// Print the country that uses US dollars as currency.

function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data);

  // ForEach():
  for (let i in data) {
    if (data[i].currencies != undefined) {
      Object.keys(data[i].currencies).forEach((key) => {
        if (key == "USD") {
          console.log(key, data[i].currencies[key]);
        }
      });
    }
  }
}
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", reqListener);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

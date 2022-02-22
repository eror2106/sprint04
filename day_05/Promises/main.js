const countriesAPI = "https://restcountries.com/v3.1/all";

/*A l'aide de la fonction fetch(), récupérez l'ensemble des pays depuis l'adresse countriesAPI. Pour chaque pays, affichez :

    le nom du pays,
    sa capitale,
    ces langues,
    sa population,
    sa région.
 */
fetch(countriesAPI)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      console.log(
        data[index].continents,
        data[index].capital,
        data[index].languages,
        data[index].population,
        data[index].region
      );
    }
    console.log();
  });
//A l'aide de la fonction fetch(), récupérez l'ensemble des pays depuis l'adresse countriesAPI.
//Affichez les 10 pays les plus peuplés.

let population = [];
fetch(countriesAPI)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    for (let index = 0; index < data.length; index++) {
      population.push(data[index].population);
    }

    population.sort(function (a, b) {
      return a - b;
    });
    console.log(population);
    for (let index = 1; index <= 10; index++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].population == population[population.length - index]) {
          console.log(data[j].name.common);
        }
      }
    }
  });

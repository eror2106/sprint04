const countries = ["Finland", "Sweden", "Norway"];
//Créez un ensemble vide set
const set = [];
//Créez un ensemble set contenant 0 à 10 en utilisant la boucle

const test = new Map();
let i = 10;
for (let index = 0; index < 11; index++) {
  test.set(i, index);
  i++;
  // console.log(test);
}
console.log(test);
//Supprimez un élément d'un ensemble set
console.log(test.delete(11));
console.log(test);
//Effacez un ensemble Set
for (let index = 10; index < 21; index++) {
  test.delete(index);

  // console.log(test);
}
console.log(test);
//Créez un dictionnaire Map avec comme clés les pays et en valeur le nombre de caractères du pays associé
const pays = new Map();

for (let index = 0; index < countries.length; index++) {
  test.set(countries[index], countries[index].length);
  i++;
  console.log(test);
}
/*
Calculer l'union de a et b
Calculer l'intersection entre a et b
*/
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
for (let index = 0; index < a.length; index++) {
  console.log("union", a[index] + b[index]);
  console.log("inter", a[index] - b[index]);
}

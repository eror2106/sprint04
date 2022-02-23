// Déclarez et initialisez les variables:
//  firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour vérifier
// les différents data types.

let firstName, lastName, country, city, age, isMarried, year;
firstName = "error";
typeof firstName;
lastName = "en cours de chargement";
typeof lastName;
country = "france";
typeof country;
age = 23;
typeof age;
isMarried = false;
typeof isMarried;
year = 2022;
typeof year;
//Vérifiez si le type '10' est égal à 10

console.log(2 == 2);
console.log("10" == 10);
console.log("10" === "10");
console.log("10" === 10);
// Vérifiez si parseInt('9.8') est égal à 10
console.log(parseInt("9.8") == 10);
// La valeur booléenne est vraie ou fausse.
console.log(4 > 3);
console.log(4 == 4);
console.log(4 === 4);

console.log(4 != 4);
console.log(4 !== 4);
console.log(4 >= 3);
// Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log().
//  Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log(2 != 2);
//-----------------------------
console.log(4 > 3); //true
console.log(4 >= 3); //false
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false
console.log(
  "Trouvez la longueur 'length' de python et du jargon et faites une fausse déclaration de comparaison."
);
//Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log().
//  Après avoir décidé le résultat, confirmez-le en utilisant console.log()
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //false
console.log(!(4 === "4")); //false
console.log("There is no 'on' in both dragon and python");
//
var d = new Date(); //instensiation de la date
let day = d.getDate(); //instensiation du jour
let month = d.getMonth() + 1; //instensiation du mois

var date = day - 1 + "/" + (month - 1) + "/" + (d.getFullYear() - 1970); //cree la date au format demander
console.log(date);

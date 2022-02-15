let myAge = 250;
let yourAge = 25;

console.log("J'ai", myAge - yourAge, "ans de plus que toi.");

var date_de_naissance = prompt("Entrez votre date de naissance:");

if (date_de_naissance >= 18) {
  console.log(
    "Vous avez ",
    date_de_naissance,
    "ans. Vous êtes autorisé de conduire."
  );
} else {
  console.log(
    "Vous avez ",
    date_de_naissance,
    "ans. Vous serez autorisé à conduire après,",
    18 - date_de_naissance,
    "ans."
  );
}

var age = prompt("Entrez votre age :");
var segonde_dans_une_année = 31557600;
console.log("Vous avez vécu ", segonde_dans_une_année * age, "secs.");

/*
    YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm
 */

//fonction de la date
var d = new Date(); //instensiation de la date
let day = addZero(d.getDate()); //instensiation du jour
let month = addZero(d.getMonth() + 1); //instensiation du mois
let h = addZero(d.getHours()); //instensiation de l'heure
let m = addZero(d.getMinutes()); //instensiation des minute
let s = addZero(d.getSeconds()); //instensiation des seconde
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

console.log(d.getFullYear() + "-" + month + "-" + day + "   " + h + ":" + m);
console.log(day + "-" + month + "-" + d.getFullYear() + "   " + h + ":" + m);
console.log(day + "/" + month + "/" + d.getFullYear() + "   " + h + ":" + m); //cree la date au format demander

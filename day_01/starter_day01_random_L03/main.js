var d = new Date(); //instensiation de la date
let day = addZero(d.getDate()); //instensiation du jour
let month = addZero(d.getMonth()); //instensiation du mois
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

// var mois = prompt("quelle mois somme nous?");
// mois = mois.toLowerCase();
// if (
//   mois == "janvier" ||
//   mois == "mars" ||
//   mois == "mai" ||
//   mois == "juillet" ||
//   mois == "aout" ||
//   mois == "octobre" ||
//   mois == "decembre"
// ) {
//   console.log(mois, " a 31 jours.");
// } else if (
//   mois == "avril" ||
//   mois == "juin" ||
//   mois == "septembre" ||
//   mois == "novemenbre"
// ) {
//   console.log(mois, " a 30 jours.");
// } else {
//   console.log(mois, " a 28 jours.");
// }

var mois = prompt("quelle mois sommes nous ? ");
var number;
let mois_courant;
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Julmiet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const dat = new Date();
function daysInMonth(month, year) {
  let result = new Date(year, month, 0).getDate();
  console.log(mois_courant, "a", result, "jours");
  //return new Date(year, month, 0).getDate();
}
mois = mois.charAt(0).toUpperCase() + mois.substring(1).toLowerCase();
for (let index = 0; index < months.length; index++) {
  if (mois === months[index]) {
    let nbjour = parseInt(index);
    mois_courant = months[index];
    number = nbjour;
  }
}

daysInMonth(number + 1, dat.getFullYear());

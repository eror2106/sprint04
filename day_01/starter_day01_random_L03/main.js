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

var mois = prompt("quelle mois somme nous?");
mois = mois.toLowerCase();
if (
  mois == "janvier" ||
  mois == "mars" ||
  mois == "mai" ||
  mois == "juillet" ||
  mois == "aout" ||
  mois == "octobre" ||
  mois == "decembre"
) {
  console.log(mois, " a 31 jours.");
} else if (
  mois == "avril" ||
  mois == "juin" ||
  mois == "septembre" ||
  mois == "novemenbre"
) {
  console.log(mois, " a 30 jours.");
} else {
  console.log(mois, " a 28 jours.");
}

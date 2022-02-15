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

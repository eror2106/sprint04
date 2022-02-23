var note = prompt("quelle est votre note :");
var day;

if (note == 0 || note <= 49) {
  console.log("0-49, F");
} else if (note == 50 || note <= 59) {
  console.log("50-59, D");
} else if (note == 60 || note <= 69) {
  console.log("60-69, C");
} else if (note == 70 || note <= 79) {
  console.log("    70-89, B  ");
} else if (note == 80 && note <= 100) {
  console.log("80-100, A");
}

var saison = prompt("quelle mois sommes nous ?");
if (saison == "septembre" || saison == "octobre" || saison == "novembre") {
  console.log(saison);
  console.log("la saison est l'automne.");
} else if (saison == "janvier" || saison == "Décembre" || saison == "février") {
  console.log("la saison est l'hiver.");
} else if (saison == "mai" || saison == "avril" || saison == "Mars") {
  console.log("la saison est le printemps ");
} else if (saison == " Juin" || saison == "juillet" || saison == "août") {
  console.log("la saison est l'été");
}

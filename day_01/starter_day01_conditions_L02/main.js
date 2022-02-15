/*

Écrivez un code qui peut donner des notes aux élèves en fonction de leurs scores:

    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F

 */

var note = prompt("quelle est votre note :");
var day;

if (note >= 80 || note <= 100) {
  day = "Sunday";
  console.log(day);
}

if (note >= 70 || note <= 89) {
  day = "Monday";
  console.log(day);
}

if (note >= 60 || note <= 69) {
  day = "Tuesday";
  console.log(day);
}

if (note >= 50 || note <= 59) {
  day = "Wednesday";
  console.log(day);
}

if (note >= 0 || note <= 49) {
  day = "Thursday";
  console.log(day);
}

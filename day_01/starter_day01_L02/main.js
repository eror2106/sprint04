console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

if ("10" === 10) {
} else {
}
var a = parseFloat("9.8");
if (a == 10) {
} else {
  a = 10;
}

let txt = "both python and jargon";
console.log(txt.search("on"));
let txt2 = "I hope this course is not full of jargon";
console.log(txt2.search("jargon"));

let nb_aleatoire = Math.floor(Math.random() * (101 - 0)) + 0;
let nb_aleatoire_n2 = Math.floor(Math.random() * (101 - 50)) + 50;
let nb_aleatoire_n = Math.floor(Math.random() * (256 - 0)) + 0;
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
let mot = phrase.indexOf("because because because");
console.log(mot);
let motfin = phrase.lastIndexOf("because");
console.log(motfin);
//split
let phrase_final = phrase.slice(mot, motfin);

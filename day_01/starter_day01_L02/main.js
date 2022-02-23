// Utilisez console.log() et afficher la déclaration suivante:
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// Utilisez console.log() et afficher la citation suivante:
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
// Vérifiez si typeof '10' est exactement égal à typeof 10. Sinon, rendez-le exactement égal.
if ("10" === 10) {
} else {
}
// Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.
var a = parseFloat("9.8");
if (a == 10) {
} else {
  a = 10;
}
// Vérifiez si "on" se trouve à la fois dans "python" et "jargon"
let txt = "both python and jargon";
console.log(txt.search("on"));
// I hope this course is not full of jargon. Vérifiez si jargon est dans la chaine
let txt2 = "I hope this course is not full of jargon";
console.log(txt2.search("jargon"));
// Générer un nombre aléatoire entre 0 et 100 inclusivement.
let nb_aleatoire = Math.floor(Math.random() * (101 - 0)) + 0;
// Générer un nombre aléatoire entre 50 et 100 inclusivement.
let nb_aleatoire_n2 = Math.floor(Math.random() * (101 - 50)) + 50;
// Générez un nombre aléatoire compris entre 0 et 255 inclusivement.
let nb_aleatoire_n = Math.floor(Math.random() * (256 - 0)) + 0;
// Utilisez la méthode substr() pour extraire la chaine de caractère "because because because" de la phrase suivante:
// "You cannot end a sentence with because because because is a conjunction"
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
let mot = phrase.indexOf("because because because");
console.log(mot);

let motfin = phrase.lastIndexOf("because");
console.log(motfin);
//split
let phrase_final = phrase.slice(mot, motfin);

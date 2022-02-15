let defi = "Pratiquer les algorithmes en JavaScript";

console.log(defi);
console.log(defi.length);
let maj = defi.toUpperCase();
let mini = defi.toLowerCase();

let premier_mot = defi.substring(0, 9);
console.log(premier_mot);

let phrase = "10 jours en JavaScript.";
let phrase_mot = phrase.substring(2, 22);
console.log(phrase_mot);
console.log(phrase.includes("Script"));

let liste_mot = phrase.split("");
let liste = phrase.split(" ");

let logo = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let liste_logo = logo.split(",");

let text = " 10 Jours en JavaScript ";
let result = text.replace("JavaScript", "PHP");

console.log(text.charAt(15));

console.log(text.charCodeAt(3));
console.log(text.indexOf("a"));
console.log(text.LastIndexOf("a"));

let conjonction =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
let conjonction_place = conjonction.indexOf("parceque");
console.log(conjonction_place);
let conjonction_placeder = conjonction.LastIndexOf("parceque");
console.log(conjonction_placeder);
let conjonction_placede = conjonction.search("parceque");
console.log(conjonction_placede);
console.log(text.trim());
console.log(text.startsWith("10 Jours en JavaScript"));
console.log(text.EndsWith("10 Jours en JavaScript"));
console.log(text.match("10 Jours en JavaScript"));

const arr1 = "10 Jours en' avec 'JavaScript'";
const arr2 = "10 Jours en JavaScript";
const children = arr1.concat(arr2);

let texte = "Hello world!";
let result = texte.repeat(2);

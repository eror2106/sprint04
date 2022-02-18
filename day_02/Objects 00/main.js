// Créez un objet vide appelé chien
var chien = {};
// Affichez l'objet chien sur la console
console.log(chien);
// Ajoutez le nom, les pattes, la couleur, l'âge et les propriétés d'écorce pour l'objet chien.
// La propriété bark est une méthode qui renvoie woof woof
let dog_3 = {
  name: "medor",
  pattes: "panzani",
  color: "chair",
  age: "detre adulte",
  bark: bark(),
};
function bark() {
  let text = "Woof Woof";
  return text;
}
console.log("1.3", dog_3);
console.log(dog_3.name);
console.log(dog_3.pattes);
console.log(dog_3.bark);

dog_3.race = getDogInfo();
function getDogInfo(params) {
  let text = "malinois";
  return text;
}
console.log(dog_3);

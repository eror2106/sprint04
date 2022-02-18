function fullName() {
  console.log("error,en cours de chargement");
}
fullName();
function NewfullName(nom, prenom) {
  console.log(nom, prenom);
}
NewfullName("error", "en cours de chargement");

function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(5, 5);

// Une aire d'un rectangle est calculée comme suit: area = longueur x largeur. Ecrivez une fonction qui calcule areaOfRectangle.
function areaOfRectangle(longueur, largeur) {
  console.log("aire de rectangle est ", longueur * largeur);
}
areaOfRectangle(5, 4);

// Le périmètre d'un rectangle est calculé comme suit: perimeter = 2x (longueur + largeur).
//  Ecrivez une fonction qui calcule perimeterOfRectangle.
function perimeterOfRectangle(longueur, largeur) {
  console.log(2 * (longueur * largeur));
}
perimeterOfRectangle(5, 4);

// L'aire d'un cercle est calculée comme suit: area = π x r x r. Ecrire une fonction qui calcule areaOfCircle

function areaOfCircle(rayon) {
  let x = Math.PI;
  console.log(x * rayon * rayon);
}
areaOfCircle(5);
/*(Facultatif) La température en C° peut être convertie en F° en utilisant cette formule: F° = (C° x 9/5) + 32. 
Écrivez une fonction qui convertit C° en F°_convertCelciusToFahrenheit_. */
function convertCelciusToFahrenheit(celsuis) {
  console.log((celsuis * 9) / 5);
}
convertCelciusToFahrenheit(20);

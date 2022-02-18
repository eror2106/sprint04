// Développez un script qui génère n'importe quel nombre de caractères aléatoire:
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let nb_aleatoire_n2 = Math.floor(Math.random() * (101 - 10)) + 10;
let result1 = "";
for (let index = 0; index < nb_aleatoire_n2; index++) {
  result1 += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(result1);
// Ecrivez un script qui génère un numéro de couleur RGB aléatoire.
let rgb_r = Math.floor(Math.random() * (256 - 0)) + 0;
let rgb_g = Math.floor(Math.random() * (256 - 0)) + 0;
let rgb_b = Math.floor(Math.random() * (256 - 0)) + 0;
console.log("rgb (", rgb_r, ",", rgb_g, ",", rgb_b, ")");

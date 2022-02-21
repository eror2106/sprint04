const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const user = {
  name: "Brook",
  scores: 75,
  skills: ["HTM", "CSS", "JS"],
  age: 16,
};
console.group();

console.table(countries);
console.table(user);
let erreur = "Cette expression n'est pas vraie";

console.assert(10 > 2 * 10, erreur);
console.warn("Fait gaffe !");
console.error("Cela ne fonctionne point !");

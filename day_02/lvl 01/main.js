let tableau_vide = [];
let tableau_deux = [1, 2, 3, 4, 5, 6];
console.log(tableau_deux.length);
console.log(
  tableau_deux[0],
  tableau_deux[tableau_deux.length / 2],
  tableau_deux[tableau_deux.length - 1]
);

let mixedDataTypes = [1, 5, true, "lol", 56, "ecole 42"];
console.log(mixedDataTypes.length);
//--------------------------
let mois = "";
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
let long = parseInt(itCompanies.length / 2);
console.log(long);
console.log(
  itCompanies[0],
  itCompanies[parseInt(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

for (let index = 0; index < itCompanies.length - 2; index++) {
  let mot = itCompanies[index].toUpperCase();

  mois += itCompanies[index] + ",";

  if (itCompanies[itCompanies.length - 3] == itCompanies[index]) {
    mois +=
      itCompanies[itCompanies.length - 2] +
      " et " +
      itCompanies[itCompanies.length - 1];
  }
  console.log(mot);
}
mois += " sont de grandes entreprises d'IT";
console.log(mois);
//Vérifiez si une certaine entreprise existe dans le tableau itCompanies. S'il existe,
//retournez le nom de l'entreprise sinon retournez "une société introuvable".

var nom_entreprise = prompt("entre le nom d'une entreprise");
let incorect = 0;
for (let index = 0; index < itCompanies.length; index++) {
  if (nom_entreprise == itCompanies[index]) {
    console.log("l'entreprise", nom_entreprise, " existe");
    break;
  } else if (itCompanies.length - 1 == incorect) {
    console.log("l'entreprise n' existe pas");
  } else {
    incorect++;
  }
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(
  itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1)
);
console.log(itCompanies.splice(1, 1));
console.log(itCompanies.splice(itCompanies.length / 2 - 1, 1));
console.log(itCompanies.splice(itCompanies.length, itCompanies.length));

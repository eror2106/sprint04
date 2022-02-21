const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
//Déstructurez et affectez les éléments du tableau constants dans les variables e, pi, gravity, humanBodyTemp et waterBoilingTemp.
let e = constants[0];
console.log(e);
let pi = constants[1];
console.log(pi);
let gravity = constants[2];
console.log(gravity);
let humanBodyTemp = constants[3];
console.log(humanBodyTemp);
let waterBoilingTemp = constants[4];
console.log(waterBoilingTemp);
//Déstructurez et affectez les éléments du tableau countries dans les variables fin, est, sw, den et nor.
let fin = countries[0];
let est = countries[1];
let sw = countries[2];
let den = countries[3];
let nor = countries[4];
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
//Parcourez le tableau des utilisateurs et obtenez toutes les clés de l'objet en utilisant la déstructuration.
for (let index = 0; index < users.length; index++) {
  console.log(Object.keys(users[index]));
}
//Trouvez les personnes qui ont moins de deux compétences et mettez les dans un tableau.
for (let index = 0; index < users.length; index++) {
  if (users[index].skills.length >= 2) {
    console.log(users[index].skills);
  }
}

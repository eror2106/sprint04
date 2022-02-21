const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Max", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//exo1 a taper a la maison

//Définissez une fonction d'appel avant de les utiliser dans forEach, map, filter ou reduce.
let tableau = [160, 200, 30, 460, 15];

tableau.forEach(myFunction);
tableau.map(myFunction);
tableau.filter(myFunction);
tableau.reduce(myFunction2);

function myFunction(num) {
  console.log(num);
}

function myFunction2(total, num) {
  console.log("total", total);
  console.log("num", num);
  console.log("result", total + num);
  return total + num;
}
//Utilisez forEach pour affichez (console.log) chaque pays du tableau des pays.
countries.forEach(myFunction);
//(Facultatitf) Utilisez forEach pour console.log chaque nom dans le tableau names.
names.forEach(myFunction);
//(Facultatitf) Utilisez forEach pour console.log chaque nombre dans le tableau de nombres.
numbers.forEach(myFunction);

//Utilisez map pour créer un nouveau tableau où chaque élément est le nom du pays en majuscule dans le tableau des pays.
const name_countries = countries.map(showuppercase);

function showuppercase(num) {
  let nom = num.toUpperCase();
  console.log(nom);
}
//Utilisez map pour créer un nouveau tableau où chaque élément est la longueur du pays à partir du tableau de pays.
let longeur_tab = 0;
const name_countries2 = countries.map(showuppercase1);

function showuppercase1() {
  longeur_tab++;
}
console.log(longeur_tab);
//Utilisez filter pour filtrer les pays contenant land.

countries.filter(myFunction3);
function myFunction3(num) {
  console.log(num);
  if (num.match("land") || num.match("Land")) {
    console.log(num);
    return num;
  }
}
//Utilisez filter pour filtrer les pays contenant 6 lettres et plus dans le tableau des pays.
countries.filter(word);
function word(pays) {
  if (pays.length > 6) {
    console.log(pays);
  }
}
//Utilisez filter pour filtrer les noms qui commence par 'E' dans le tableau names.
names.filter(char);
function char(c) {
  if (c.charAt(0) == "E") {
    console.log(c);
  }
}
//Utilisez reduce pour additionner tous les nombres du tableau de nombres.
numbers.reduce(add);
function add(n, x) {
  console.log(n + x);
  return n + x;
}
console.log();
/*
some et une appeele de fonction qui retourne si return un boleen */

//Utilisez some pour vérifier si la longueur de certains noms est supérieure à sept dans le tableau des noms.
names.some(longeur);
function longeur(mot) {
  if (mot.length > 7) {
    console.log(mot);
    return mot;
  } else {
    console.log(mot);
    console.log(mot.length);
  }
}
//Utilisez every pour vérifier si tous les pays contiennent le mot land.
countries.every(char_pays);
function char_pays(num) {
  if (num.match("land") || num.match("Land")) {
    console.log(num);
  }
  return num;
}
//Expliquez la différence entre find et findIndex.

//Utilisez find pour trouver le premier pays contenant seulement six lettres dans le tableau des pays.
countries.find(pays6);
function pays6(mot) {
  if (mot.length > 6) {
    console.log(mot);
  }
  return mot.length > 6;
}
//Utilisez findIndex pour trouver la position du premier pays contenant seulement six lettres dans le tableau des pays.
countries.findIndex(pays3);
function pays3(mot) {
  if (mot.length == 6) {
    console.log(mot);
  }
  return mot.length > 6;
}

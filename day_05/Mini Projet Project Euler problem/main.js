let multiple3 = [];
let calcul3 = 0;
for (let index = 1; index <= 999; index++) {
  calcul3 += 3 * index;
}
console.group("multiple de 3");
console.log(calcul3);
let multiple5 = [];
let calcul5 = 0;
for (let index = 1; index <= 999; index++) {
  calcul5 += 5 * index;
}
console.group("multiple de 5");
console.table(calcul5);

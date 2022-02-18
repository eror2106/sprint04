for (let index = 0; index <= 10; index++) {
  console.log(index);
}
let index = 0;
while (index <= 10) {
  console.log(index);
  index++;
}

let i = 0;

do {
  console.log(i);
  i++;
} while (i <= 10);

console.log("boucles inverser");
for (let index = 10; index >= 0; index--) {
  console.log(index);
}
let index2 = 10;
while (index2 >= 0) {
  console.log(index2);
  index2--;
}

let j = 10;

do {
  console.log(j);
  j--;
} while (j >= 0);
//----------------------------
let n = 10;
for (let index = 0; index < n; index++) {
  console.log(index);
}
//---------------------------
diez = "#";
for (let index = 0; index <= 6; index++) {
  console.log(diez);
  diez += "#";
}
for (let index = 0; index <= 10; index++) {
  console.log(index, " x ", index, " = ", index * index);
}

for (let index = 0; index < 100; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

let result = 0;
for (let index = 0; index <= 100; index++) {
  result += index;
}
console.log(result);

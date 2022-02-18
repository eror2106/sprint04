console.log(webTechs);
console.log(countries);
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
let list_words = [];
text = text.replaceAll(",", "").replaceAll(".", "");
list_words = text.split(" ");

console.log("1.2a", list_words);
console.log("1.2b", list_words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

for (let index = 0; index < shoppingCart.length; index++) {
  if (shoppingCart[index] == "Honey") {
    shoppingCart.splice(index, 1);
  }
}
console.log(shoppingCart);

for (let index = 0; index < shoppingCart.length; index++) {
  if (shoppingCart[index] == "Tea") {
    shoppingCart[index] = "Green Tea";
  }
}
console.log(shoppingCart);

for (let index = 0; index < countries.length; index++) {
  if (countries[index] == "Morocco") {
    console.log(countries[index].toUpperCase());
    console.log(countries.length);
  }
  if (countries.includes("Morocco") == false) {
    countries.push("Morocco");
  }
}

console.log(countries);

for (let index = 0; index < webTechs.length; index++) {
  if (webTechs.includes("Sass") == false) {
    webTechs.push("Sass");
    console.log(webTechs[webTechs.length - 1]);
    break;
  } else {
    console.log("Sass est un préprocesseur CSS");
  }
}

console.log(webTechs);
const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = [];
for (let index = 0; index < frontEnd.length; index++) {
  fullStack.push(frontEnd[index]);
}
for (let index = 0; index < backEnd.length; index++) {
  fullStack.push(backEnd[index]);
}
console.log(fullStack);

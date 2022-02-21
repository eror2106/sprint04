let firstName = "Aymane";

try {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
} catch (err) {
  console.error("Uncaught ReferenceError");
}

try {
  eval("hoo bar");
} catch (err) {
  console.error("A syntax error has occurred");
}

let num = 10;

try {
  console.log(num.toLowerCase());
} catch (error) {
  console.error("Uncaught TypeError");
}

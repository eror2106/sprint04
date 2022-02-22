const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
//A l'aide de la fonction JSON.stringify(), transformer le tableau skills en JSON.
let json_skills = JSON.stringify(skills);
console.log(json_skills);
//A l'aide de la fonction JSON.stringify(), stringifier la variable age.
let json_age = JSON.stringify(age);
console.log(json_age);
//(Facultatif) A l'aide de la fonction JSON.stringify(), stringifier la variable isMarried.
let json_isMarried = JSON.stringify(isMarried);
console.log(json_isMarried);
//A l'aide de la fonction JSON.stringify(), stringifier l'objet student.
let json_objet = JSON.stringify(student);
console.log(json_objet);
//A l'aide de la fonction JSON.stringify(), stringifier l'objet student en
//conservant uniquement les propriétés : firstName, lastName et skills.
let json = JSON.stringify({
  firstName: student.firstName,
  lastName: student.lastName,
  skills: student.skills,
});

console.log(json);
/////////------------------------------------------------------------//
const txt = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let txte = JSON.stringify(txt);
console.log(txte);

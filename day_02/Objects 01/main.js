const users = {
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
let skills_tab = [];
for (let index in users) {
  skills_tab.push(users[index].skills.length);
}

var max = Math.max.apply(null, skills_tab);

for (let index in users) {
  if (users[index].skills.length == max) {
    console.log(index);
    break;
  }
}
let user_co = [];
for (let index in users) {
  if (users[index].isLoggedIn == true) {
    user_co.push(users[index].points);
  }
}

let array_mern = [];
for (let index in users) {
  if (
    users[index].skills.includes("MongoDB") == true &&
    users[index].skills.includes("Express") == true &&
    users[index].skills.includes("React") == true &&
    users[index].skills.includes("Node") == true
  ) {
    array_mern.push(index);
  }
}
users.nom = "error";

console.log(users);
for (let index in users) {
  console.log(index);
  console.log(users[index]);
}

//Enregistrez votre prénom, nom, âge, pays, ville dans votre navigateur avec localStorage.
localStorage.setItem("prénom", "error");
localStorage.setItem("nom", "encoursdechargement");
localStorage.setItem("age", 23);
localStorage.setItem("pays", "france");
localStorage.setItem("ville", "stdenis");
localStorage.clear();
//Créez un objet student. L'objet student aura un prénom, un nom, un âge, des compétences et un pays.
//Stockez l'objet student dans votre navigateur local localStorage.
let student = {
  prenom: "eror",
  nom: "encour de chargement",
  age: 23,
  competence: "jsp",
  pays: "frennnns",
};
localStorage.setItem("student", JSON.stringify(student));

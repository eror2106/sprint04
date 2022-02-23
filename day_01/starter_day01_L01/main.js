//Déclarez une variable nommée defi et attribuez-lui une valeur initiale 'Pratiquer les algorithmes en JavaScript'.
let defi = "Pratiquer les algorithmes en JavaScript";
// Affichez la chaîne sur la console du navigateur en utilisant console.log()
console.log(defi);
// Affichez le length de la chaîne sur la console du navigateur en utilisant console.log()
console.log(defi.length);
// Remplacez tous les caractères de chaîne en majuscules en utilisant la méthode toUpperCase()
let maj = defi.toUpperCase();
// Remplacez tous les caractères de chaîne par des lettres minuscules en utilisant la méthode toLowerCase()
let mini = defi.toLowerCase();
//Découpez (slice) le premier mot de la chaîne en utilisant la méthode substr() ou bien substring()
let premier_mot = defi.substring(0, 9);
console.log(premier_mot);
// A partir de la chaîne de caractères 10 jours en JavaScript, écrire le code qui permet d'obtenir la chaîne de caractères Jours en JavaScript.
let phrase = "10 jours en JavaScript.";
let phrase_mot = phrase.substring(2, 22);
console.log(phrase_mot);
// Vérifiez si la chaîne contient un mot Script en utilisant la méthode includes()
console.log(phrase.includes("Script"));
//Divisez la chaine "string" en utilisant la méthode split() avec la chaine vide comme argument
let liste_mot = phrase.split("");
// Divisez la chaine "10 Jours en JavaScript" en utilisant la méthode split() avec le caractère espace comme séparateur
let liste = phrase.split(" ");
// Divisez la chaine "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" en utilisant la méthode split() avec le caractère espace comme séparateur
let logo = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let liste_logo = logo.split(",");
let text = " 10 Jours en JavaScript ";
// Transformez "10 Jours en JavaScript" en "10 Jours en PHP" en utilisant la méthode replace()
let result = text.replace("JavaScript", "PHP");
// Quel est le caractère à l'index 15 dans la chaine "10 Jours en JavaScript"? Utilisez la méthode charAt()
console.log(text.charAt(15));
// Quel est le code de caractère de J dans la chaine "10 Jours en JavaScript" en utilisant charCodeAt()
console.log(text.charCodeAt(3));
// Utilisez indexOf() pour déterminer la position de la première occurrence de a dans 10 Jours en JavaScript
console.log(text.indexOf("a"));
// Utilisez lastIndexOf pour déterminer la position de la dernière occurrence de a dans "10 Jours en JavaScript"
console.log(text.lastIndexOf("a"));
// Utilisez indexOf pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:
// 'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'
let conjonction =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
let conjonction_place = conjonction.indexOf("parceque");
console.log(conjonction_place);
// Utilisez lastIndexOf pour trouver la position de la dernière occurrence du mot parceque dans la phrase suivante:
// 'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'
let conjonction_placeder = conjonction.lastIndexOf("parceque");
console.log(conjonction_placeder);
// Utilisez search pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:
// 'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'
let conjonction_placede = conjonction.search("parceque");
console.log(conjonction_placede);
// Utilisez la méthode trim() pour supprimer tout espace blanc de fin au début et à la fin d'une chaîne. ' 10 Jours en JavaScript '.
console.log(text.trim());
// Utilisez la méthode startsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai
console.log(text.startsWith("10 Jours en JavaScript"));
// Utilisez la méthode endsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai
console.log(text.endsWith("10 Jours en JavaScript"));
// Utilisez la méthode match() pour trouver tous les a dans "10 Jours en JavaScrip
console.log(text.match("10 Jours en JavaScript"));
// Utilisez la méthode concat() et fusionner '10 Jours en' avec 'JavaScript' tà une seule chaîne, '10 Jours en JavaScript'
const arr1 = "10 Jours en' avec 'JavaScript'";
const arr2 = "10 Jours en JavaScript";
const children = arr1.concat(arr2);
// Utilisez la méthode repeat() pour afficher "10 Jours en JavaScript" 2 fois
let texte = "Hello world!";
let result = texte.repeat(2);

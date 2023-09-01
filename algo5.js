let choix = Number(window.prompt('Veuillez choisir un nombre'));

let i = 0;
let result = 0;
do {
    i++;
    result += i;
} while (i < choix);
console.log(result);
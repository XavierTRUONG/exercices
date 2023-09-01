let choix = Number(window.prompt('Veuillez choisir un nombre'));
let i = 0;

console.log(`Vous avez choisi le nombre: ${choix}.`);
console.log(`${choix} est divisible par:`);

do {
    i++;
    if (choix % i == 0) {
        console.log(`${i}`);
    }
} while (i < choix);
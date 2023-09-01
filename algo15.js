let choix = Number(window.prompt('Veuillez choisir un nombre'));
let i = 0;
let count =0;

do {
    i++;
    if (choix % i == 0) {
        count +=1;
    }
} while (i < choix);

if (count === 2) {
    console.log(`${choix} est un nombre premier`);
} else {
    console.log(`${choix} n'est pas un nombre premier`);
}
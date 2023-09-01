let choix = Number(window.prompt('Veuillez choisir un nombre'));
let multiples = [2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Table de ${choix}:`);
for (const multiple of multiples) {
    let multiplication = choix * multiple;
    console.log(`${choix} x ${multiple} = ${multiplication}`);
}

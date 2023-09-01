const choixTitres = Number(window.prompt('Veuillez choisir un nombre de titres à télécharger:'));
const formuleA = 0.85 * choixTitres;
const formuleB = 10 + ( 0.1 * choixTitres );

if (formuleA === formuleB) {
    console.log(`les deux formules sont aussi avantageuses elles coutent: ${formuleA.toFixed(2)}€`);
} else if (formuleB < formuleA) {
    console.log(`La formule la plus avantageuse est la formule B, vous ne paierai que: ${formuleB.toFixed(2)}€ au lieu de ${formuleA.toFixed(2)}€.`);
} else {
    console.log(`La formule la plus avantageuse est la formule A, vous ne paierai que: ${formuleA.toFixed(2)}€ au lieu de ${formuleB.toFixed(2)}€.`);
}

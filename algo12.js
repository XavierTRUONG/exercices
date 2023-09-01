const nbrJours = Number(window.prompt(`Veuillez choisir le nombre de jours d'utilisation:`));
const nbrKms = Number(window.prompt('Veuillez choisir le nombre de kilomètres parcourus:'));
const majoration = (1.25 * 0.1) + 1.25;
const forfaitParJour = 50 * nbrJours;
const forfait500 = (nbrKms - 50) * 1.25;
const forfaitAuDela = (450 * 1.25) + ((nbrKms - 500) * majoration);
let montantTotal = 0;

if (nbrKms <= 50) {
    montantTotal = forfaitParJour;
    console.log(`Le montant total à payer est de: ${montantTotal}`);
} else if (nbrKms <= 500) {
    montantTotal = forfaitParJour + forfait500;
    console.log(`Le montant total à payer est de: ${montantTotal}`);
} else if (nbrKms > 500) {
    montantTotal = forfaitParJour + forfaitAuDela;
    console.log(`Le montant total à payer est de: ${montantTotal}`);
}
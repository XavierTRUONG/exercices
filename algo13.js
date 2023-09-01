const nbrCopies = Number(window.prompt(`Veuillez choisir le nombre de jours d'utilisation:`));
const forfait10 = 1 * nbrCopies;
const forfait30 = (10 * 1) + (nbrCopies - 10) * .5;
const forfaitAuDela = (10 * 1) + (20 * .5) + ((nbrCopies - 30) * .1);
let montantTotal = 0;

if (nbrCopies <= 10) {
    montantTotal = forfait10;
    console.log(`Le montant total à payer est de: ${montantTotal}`);
} else if (nbrCopies <= 30) {
    montantTotal = forfait30;
    console.log(`Le montant total à payer est de: ${montantTotal}`);
} else if (nbrCopies > 30) {
    montantTotal = forfaitAuDela;
    console.log(`Le montant total à payer est de: ${montantTotal}`);
}
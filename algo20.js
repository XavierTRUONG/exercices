const prixHT = Number(window.prompt('Veuillez rentrer le prix HT:'));
const tauxTVA = 0.2;
let TVA = 0;
let TTC = 0;

const getTTC = () => {
    TVA = prixHT * tauxTVA;
    TTC = TVA + prixHT;
    console.log(`Le prix TTC est de: ${TTC}€`);
}

getTTC();
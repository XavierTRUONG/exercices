let choix;
const nbrChoix = [1, 2]
let i = 0;
let listeNbrDivisible = [];

const estPremier = () => {
    for (const item of nbrChoix) {
        choix = Number(window.prompt('Veuillez choisir deux nombre'));

        do {
            i++;
            if (choix % i == 0) {
                listeNbrDivisible.push(i)
            }
        } while (i < choix);
    }
    console.log(listeNbrDivisible);
}

estPremier();
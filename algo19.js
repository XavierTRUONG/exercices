let choix = Number(window.prompt('Veuillez choisir 0 ou 1!'));

let pileOuFace = Math.round(Math.random()*1);

if (pileOuFace === choix) {
    console.log('Gagné!');
    console.log(pileOuFace);
    console.log(choix);
} else {
    console.log('Perdu!');
    console.log(pileOuFace);
    console.log(choix);
}
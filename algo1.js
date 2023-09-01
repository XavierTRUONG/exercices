let choix = Number(window.prompt('Veuillez choisir un nombre entre 1 et 3'));
let numbers = [1, 2, 3]

numbers.forEach((number) => {
    const response = 1;
    if (choix === response) {
        console.log('bonne réponse');
    } else {
        console.log('mauvaise réponse');
    }
})


let choix = Number(window.prompt('Veuillez choisir un nombre entre 10 et 20'));
let numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.forEach((number) => {
    const response = 12;
    if (choix > response) {
        console.log('Plus petit!');
    } else if (choix < response) {
        console.log('Plus grand!');
    } else {
        console.log('Bonne réponse');
    }  
})
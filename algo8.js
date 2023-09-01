let allChoix = []
let choix;

do {
    choix = Number(window.prompt('Veuillez choisir un nombre'));   
    allChoix.push(choix)
} while (choix !== 0);

console.log(allChoix);
console.log(Math.max(...allChoix));
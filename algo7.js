let nbrChoix = [1 ,2 ,3 ,4 ,5]
let allChoix = []

for (const item of nbrChoix) {
    let choix = Number(window.prompt('Veuillez choisir un nombre'));   
    allChoix.push(choix)
}

console.log(allChoix);
console.log(`Le plus grand nombre est ${Math.max(...allChoix)}`);
console.log(`Le plus petit nombre est ${Math.min(...allChoix)}`);
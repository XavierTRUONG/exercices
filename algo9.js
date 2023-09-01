let achats;
let allAchats = [];
let montantTotal;

do {
    achats = Number(window.prompt('Veuillez scanner vos achats:'));   
    allAchats.push(achats)
} while (achats !== 0);

console.log(allAchats);

for (const item of allAchats) {
    const priceAchat = item;
    const priceAchatFloat = parseFloat(priceAchat);
    montantTotal += priceAchatFloat;
    console.log(montantTotal);
}


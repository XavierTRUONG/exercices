const participants = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
let gagnants = [];
const nbrRecompenses = 10;

// creation d'une fonction qui renvoie un nombre au hasard
const getRandomNumber = (max) => {
    let tirageAuSort = Math.floor(Math.random() * max);
    return tirageAuSort;
}

// creation d'une fonction qui renvoie un tableau des gagnants trié, il prend en param les participants et
// le nombre de gagnants
const tirage = (listeParticipants, nbrGagnants) => {

    // on boucle autant de fois que de gagnants
    for (let i = 0; i < nbrGagnants; i++) {
        //Si plus de participant, on arrete de tirer au sort
        if (participants.length === 0) break;
        
        // on tire au sort un nombre au hasard entre le nombre de participants
        let result = getRandomNumber(participants.length);
        gagnants.push(participants[result]);
        listeParticipants.splice(result, 1);
        
    }
    console.log(`Le premier gagnant est: ${gagnants[0]}`);
    console.log(`Le deuxième gagnant est: ${gagnants[1]}`);
    console.log(`Le troisième gagnant est: ${gagnants[2]}`);
    return gagnants;              
}

console.log(tirage(participants, nbrRecompenses));


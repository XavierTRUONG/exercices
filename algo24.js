const participants = [
    {nom: 'Shanks', cp:75002},
    {nom: 'Ben', cp:75003},
    {nom: 'Donflammingo', cp:75003},
    {nom: 'Kidd', cp:75005},
    {nom: 'Roger', cp:75001},
    {nom: 'Francky', cp:75006},
    {nom: 'Chopper', cp:75005},
    {nom: 'King', cp:75004},
    {nom: 'Zoro', cp:75006},
    {nom: 'Kirohige', cp:75004},
    {nom: 'Luffy', cp:75006},
    {nom: 'Mihawk', cp:75003},
    {nom: 'Law', cp:75005},
    {nom: 'Kaido', cp:75002},
    {nom: 'Nami', cp:75006},
    {nom: 'Crocodile', cp:75004},
    {nom: 'Sanji', cp:75005},
    {nom: 'Katakuri', cp:75004},
    {nom: 'Usopp', cp:75006},
    {nom: 'Robin', cp:75005},
    {nom: 'Jimbe', cp:75006}
];

let gagnants = [];
let resultTirage = [];

// creation d'une fonction qui renvoie un tableau avec les participants triés par cp
// on tri par cp
// on ajoute les participants dans des tableaux trié par cp

const groupBy = () => {
    return participants.reduce(function (acc, obj) {
      let cle = obj['cp'];
      if(!acc[cle]){
        acc[cle] = [];
      }
      acc[cle].push(obj);
      return acc;
    }, {});
}

let participantsGroupByCp = groupBy();

// creation d'une fonction qui renvoie un nombre au hasard
const getRandomNumber = (max) => {
    let tirageAuSort = Math.floor(Math.random() * max);
    return tirageAuSort;
}

// creation d'une fonction qui renvoie un tableau des gagnants trié par CP, un gagnant par CP
const tirage = (listeParticipants) => {
    console.log(listeParticipants);
    // on tire au sort un gagnant par code postal
    for (const cp in listeParticipants) {
        const participants = listeParticipants[cp];
        const result = getRandomNumber(participants.length);
        resultTirage.push(result);
        gagnants.push(participants[result]);
    }
    console.log(resultTirage);
    console.log(gagnants);
}

tirage(participantsGroupByCp);



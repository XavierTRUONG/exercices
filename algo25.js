const candidats = [
    'Luffy',
    'Barbe noire',
    'Shanks',
    'Baggy'
];

let votes = [
    'Luffy',
    'Luffy',
    'Shanks',
    'Luffy',
    'Shanks',
    'Luffy',
    'Shanks',
    'Luffy',
    'Barbe noire',
    'Luffy',
    'Shanks',
    'Luffy',
    'Barbe noire',
    'Luffy',
    'Barbe noire',
    'Luffy',
    'Shanks',
    'Luffy',
    'Barbe noire',
    'Shanks',
    'Shanks',
    'Luffy',
    'Shanks'
];

let nbrBulletinsCandidats = [];
let allDataCandidats = [];

// creation d'une fonction qui renvoie plusieurs tableaux associatifs trié par nom de bulletin
const votesGroupBy = () => {
    return votes.reduce(function (acc, obj) {
        let key = obj;
        if(!acc[key]){
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

// creation d'une fonction pour récuperer le nombre de votes pas candidats
const calculerNbrBulletins = () => {
    const votesGroupByParticipants = votesGroupBy();
    for (const participant in votesGroupByParticipants) {
        const nbrBulletins = votesGroupByParticipants[participant].length;
        allDataCandidats.push({
            nom: participant,
            bulletins: nbrBulletins
        });
    }
}

// création d'une fonction pour calculer le pourcentage de votes par candidat
const getTotalBulletins = () => {
    let totalBulletins = 0;
    // on cible le total de bulletins de chaques candidats et on stock le résultat dans une variable
    for (const bulletin of allDataCandidats) {
        totalBulletins += bulletin.bulletins;
    }
    return totalBulletins;
}

const getPourcentageCandidats = () => {
    const totalBulletins = getTotalBulletins();
    let pourcentage = 0;
    for (const candidat of allDataCandidats) {
        pourcentage = (candidat.bulletins * 100) / totalBulletins;
        candidat.pourcentage = pourcentage;
        candidat.pourcentageText = `${pourcentage.toFixed(1)}%`;
    }
}

const ajouterCandidatSansVotes = () => {
    for (const candidat of candidats) {
        if (allDataCandidats.findIndex( c => c.nom === candidat) === -1) {
            allDataCandidats.push({
                nom: candidat,
                bulletins: 0,
                pourcentage: 0,
                pourcentageText: '0%'
            })
        }       
    }
}

const depouillement = () => {
    calculerNbrBulletins();
    getPourcentageCandidats();
    ajouterCandidatSansVotes();
    console.log(allDataCandidats);
}

depouillement();
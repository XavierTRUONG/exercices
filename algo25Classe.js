class Election {

    //Propriété privées (Non accessible depuis l'exterieur de la classe)
    #candidats = []; // Liste des candidats à l'election
    #votes = []; //Urne contenant les votes
    #allDataCandidats = []; //Tableau des résultats

    constructor(candidats) {
        if (candidats) {
            this.#candidats = candidats;
        }
    };

    /**
     * Ajouter un condidat à l'election
     * @param candidat Nom du candidat
     */
    ajouterCandidat(candidat) {
        // Ne pas ajouter le candidat si déjà présent
        if (this.#getIndexCandidat(candidat) === -1) {
            this.#candidats.push(candidat);
        }
    }

    /**
     * Ajoute un vote dans l'urne
     * @param candidat Nom du candidat
     */
    voter(candidat) {
        this.#votes.push(candidat);
    }

    /**
     * Recherche position d'un candidat
     * @param candidat Nom du candidta
     * @returns {number} Position du candidat dans le tableau des caondidats
     */
    #getIndexCandidat(candidat) {
        return this.#candidats.findIndex((c) => c === candidat);
    }

    /**
     * Rertoure un objet regroupé selon une propriété de l'objet #votes
     * @returns {*}
     */
    #votesGroupBy() {
        return this.#votes.reduce(function (acc, obj) {
            let key = obj;
            if(!acc[key]){
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    };

    /**
     * Charge le tableau des resultats avec le nombre de vote pas candidat ayant eu des votes
     */
    #calculerNbrBulletins() {
        const votesGroupByParticipants = this.#votesGroupBy();
        for (const participant in votesGroupByParticipants) {
            const nbrBulletins = votesGroupByParticipants[participant].length;
            this.#allDataCandidats.push({
                nom: participant,
                bulletins: nbrBulletins
            });
        }
    };

    /**
     * Retourne le nombre de bulletin dans l'urne
     * @returns {number}
     */
    #getTotalBulletins() {
        let totalBulletins = 0;
        // on cible le total de bulletins de chaques candidats et on stock le résultat dans une variable
        for (const bulletin of this.#allDataCandidats) {
            totalBulletins += bulletin.bulletins;
        }
        return totalBulletins;
    }

    /**
     * Recalcul le pourcentage de vote pour chaquun des candidat ayant reçu des votes
     */
    #getPourcentageCandidats() {
        const totalBulletins = this.#getTotalBulletins();
        let pourcentage = 0;
        for (const candidat of this.#allDataCandidats) {
            pourcentage = (candidat.bulletins * 100) / totalBulletins;
            candidat.pourcentage = pourcentage;
            candidat.pourcentageText = `${pourcentage.toFixed(1)}%`;
        }
    }

    /**
     * Rajoute au resultat les candidats sans vote
     */
    #ajouterCandidatSansVotes() {
        for (const candidat of this.#candidats) {
            if (this.#allDataCandidats.findIndex( c => c.nom === candidat) === -1) {
                this.#allDataCandidats.push({
                    nom: candidat,
                    bulletins: 0,
                    pourcentage: 0,
                    pourcentageText: '0%'
                })
            }
        }
    }

    /**
     * Vider l'urne
     */
    #viderUrne() {
        this.#allDataCandidats = [];
    }

    /**
     * Lance de depouillement de l'election
     */
    depouiller() {
        this.#viderUrne();
        this.#calculerNbrBulletins();
        this.#getPourcentageCandidats();
        this.#ajouterCandidatSansVotes();
    }

    /**
     * Afficher le résultat
     */
    afficherResultat() {
        console.log(this.#allDataCandidats);
    }
}


// Initialisation d'une election avec des candidats déjà prédéfini
const election1 = new Election([
    'Luffy',
    'Barbe noire',
    'Shanks'
])

// Ajout d'un candidat à l'election
election1.ajouterCandidat('Baggy');
election1.ajouterCandidat('Baggy');

// Ajouts des votes
election1.voter('Luffy');
election1.voter('Luffy');
election1.voter('Shanks');
election1.voter('Luffy');
election1.voter('Shanks');
election1.voter('Luffy');
election1.voter('Shanks');
election1.voter('Luffy');
election1.voter('Barbe noire');
election1.voter('Luffy');
election1.voter('Shanks');
election1.voter('Luffy');
election1.voter('Barbe noire');
election1.voter('Luffy');
election1.voter('Barbe noire');
election1.voter('Luffy');
election1.voter('Shanks');
election1.voter('Luffy');
election1.voter('Barbe noire');
election1.voter('Shanks');
election1.voter('Shanks');
election1.voter('Luffy');
election1.voter('Shanks');


// Initialisation d'une 2ème élections
const election2 = new Election([
    'John',
    'Barbara',
    'Jack'
])

// Ajout des votes à l'élection n°2
election2.voter('John');
election2.voter('John');
election2.voter('John');
election2.voter('Barbara');
election2.voter('John');
election2.voter('Jack');

// Dépouillement des 2 elections
election1.depouiller();
election2.depouiller();

// Affichage des résultats
console.log("Election n°1");
election1.afficherResultat();

console.log("Election n°2");
election2.afficherResultat();
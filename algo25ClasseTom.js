class Election {

    //Propriété privées (Non accessible depuis l'exterieur de la classe)
    #candidats = []; // Liste des candidats à l'election
    #votes = []; //Urne contenant les votes
    #resultats = []; //Tableau des résultats

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
        if (!this.#existCandidat(candidat)) {
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
     * @returns {boolean} true si le candidat existe
     */
    #existCandidat(candidat) {
        return this.#candidats.findIndex((c) => c === candidat) !== -1;
    }

    #indexCandidatInResult(candidat) {
        return this.#resultats.findIndex((c) => c.nom === candidat);
    }

    /**
     * Initialise le tableau des résultats en fonction des candidats
     * @returns {*}
     */
    #initResultat() {
        this.#viderResultat();
        for (const candidat of this.#candidats) {
            if (this.#indexCandidatInResult(candidat) === -1) {
                const nbBulletin  = 0;
                this.#resultats.push({
                    nom: candidat,
                    bulletins: nbBulletin
                });
            }
        }
    };

    /**
     * Charge le tableau des resultats avec le nombre de vote pas candidat ayant eu des votes
     */
    #compterBulletin() {
        this.#initResultat();
        for (const candidat of this.#votes) {
            let index = this.#indexCandidatInResult(candidat)
            if (index !== -1) {
                this.#resultats[index].bulletins += 1;
            }
        }
    };


    /**
     * Retourne le nombre de bulletin dans l'urne
     * @returns {number}
     */
    #getTotalBulletins() {
        return this.#votes.length;
    }

    /**
     * Recalcul le pourcentage de vote pour chaquun des candidat ayant reçu des votes
     */
    #getPourcentageCandidats() {
        const totalBulletins = this.#getTotalBulletins();
        for (const candidat of this.#resultats) {
            const pourcentage = totalBulletins === 0 ? 0 : (candidat.bulletins * 100) / totalBulletins;
            candidat.pourcentage = pourcentage;
            candidat.pourcentageText = `${pourcentage.toFixed(2)}%`;
        }
    }

    /**
     * Vider l'urne
     */
    #viderResultat() {
        this.#resultats = [];
    }

    /**
     * Lance de depouillement de l'election
     */
    depouiller() {
        this.#compterBulletin();
        this.#getPourcentageCandidats();
    }

    /**
     * Afficher le résultat
     */
    afficherResultat() {
        console.log(this.#resultats);
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
const choixMois = window.prompt(`Veuillez choisir un mois dans l'année:`);

switch (choixMois) {
    case 'mars':
    case 'avril':
    case 'mai':
        console.log(`La saison correspondant à ${choixMois} est le printemps!`);
        break;

    case 'juin':
    case 'juillet':
    case 'aout':
        console.log(`La saison correspondant à ${choixMois} est l'été!`);
        break;

    case 'septembre':
    case 'octobre':
    case 'novembre':
        console.log(`La saison correspondant à ${choixMois} est l'automne!`);
        break;

    case 'decembre':
    case 'janvier':
    case 'fevrier':
        console.log(`La saison correspondant à ${choixMois} est l'hiver!`);
        break;

    default:
        break;
}
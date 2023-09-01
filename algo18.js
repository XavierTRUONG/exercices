const choix = window.prompt('Veuillez choisir un mot de passe:');

if (
    choix.match( /[0-9]/g) && 
    choix.match( /[A-Z]/g) && 
    choix.match(/[a-z]/g) && 
    choix.match( /[^a-zA-Z\d]/g) &&
    choix.length >= 10) 
    {
    console.log('Mot de passe Fort!');
} else {
    console.log('Mot de passe Faible!');
}
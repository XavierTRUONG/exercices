// On paramètre l'observateur que l'on veut mettre en place
const observer = new IntersectionObserver(([element]) => {
    // si l'élément est dans le viewport on le fait tourner
    if (element.isIntersecting) {
        element.target.classList.add('rotate')
        element.target.classList.add('visible')
    // si l'élément n'est pas dans le viewport on ne le fait pas tourner
    } else {
        element.target.classList.remove('rotate')
        element.target.classList.remove('visible')
    }
});

const arr = new Array(50);

for (const star of arr) {
    const template = document.querySelector('template');
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);
}

const stars = document.querySelectorAll('.etoile');
stars.forEach((star, index) => {
    if (index === 0) {
        star.classList.add('visible');
    } else {
        observer.observe(star)
    }
});

// On créer une fonction qui renvoie aléatoirement une couleur en hexadécimal
const createRandomColorHexa = () => {
    const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const random = hexa.sort(() => Math.floor(Math.random() * hexa.length)).slice(0, 6).join('');
    return random;
}

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    const body = document.querySelector('body');
    const scroll = window.scrollY;
    let colorsRandom = createRandomColorHexa();
    if (scroll) {
        body.style.background = `#${colorsRandom}`;
        console.log(colorsRandom);
    } 
})

// on vérifie si on scroll, si c'est le cas on ajoute une étoile toutes les 3s, on limite à 100 max le nombre d'étoiles
// let didScroll = false;
// window.addEventListener('scroll', (e) => {  
//     didScroll = true;
// })

// setInterval(() => {
//     if (didScroll) {
//         if (totalEtoile < maxEtoiles) {   
//             showContent();
            
//             let stars = document.querySelectorAll('.etoile');
//             for (const star of stars) {
//                 setNewObserver(star);
//             }  
//             didScroll = false;
//             totalEtoile++;
//         }
//     }
// }, 3000)

// toutes les 3s affiche une étoile si on scrolle
// visibity hidden, boucle, method qui permet de 
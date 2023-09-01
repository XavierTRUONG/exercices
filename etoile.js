// création d'une variable qui permettra ensuite de rajouter de la hauteur à la page si l'on scrolle
let loadMore = '<div style="height: 1000px;"></div>';

let wrapper = document.getElementById("wrapper");

let content = document.getElementById("content");
content.insertAdjacentHTML('beforeend', '<div style="height: 1000px;"></div>');

// on créer une fonction qui affiche une étoile qui tourne sur elle-même
const displayStar = () => {
    content.insertAdjacentHTML('beforeend',
    `<div class="container">
        <div class="carre">
            <div class="triangle1"></div>
            <div class="triangle2"></div>
            <div class="triangle3"></div>
            <div class="triangle4"></div>
            <div class="triangle5"></div>
        </div>
    </div>`
    )
}

// on créer une fonction qui prend en param un objet, un évènement et une autre fonction avec deux conditions qui permet
// le fonctionnement sur tous les navigateurs
const addEvent = (object, event, func) => { 
    if (object.addEventListener) {
        object.addEventListener(event, func, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + event, func);
    }
}

// on créer une fonction qui permet de scroller à l'infini
const scroller = ()  => {
    if (wrapper.scrollTop + wrapper.offsetHeight + 100 > content.offsetHeight) {
        content.innerHTML += loadMore;
    }
}


// On paramètre l'observateur que l'on veut mettre en place
const observer = new IntersectionObserver(([element]) => {
    // si l'élément est dans le viewport on le fait tourner
    if (element.isIntersecting) {
        console.log('rotate');
        element.target.classList.add('rotate')
        // si l'élément n'est pas dans le viewport on ne le fait pas tourner
    } else {
        console.log('unrotate');
        element.target.classList.remove('rotate')
    }
});

// On créer une fonction pour positionner des observateurs où l'on veut
const setNewObserver = (element) => {
    observer.observe(element);
}

const isIntersectingElement = document.querySelector('.container');
setNewObserver(isIntersectingElement);

// Permet de scroller à l'infini
addEvent(wrapper, 'scroll', scroller)

// on vérifie si on scroll, si c'est le cas on ajoute une étoile toutes les 3s
let didScroll = false
window.onwheel = () => {
    didScroll = true;
    setInterval(() => {
        displayStar()

        let stars = document.querySelectorAll('.container');
        for (const star of stars) {
            setNewObserver(star);
        }  
    }, 3000)
}

if ( didScroll ) {
    didScroll = false;
} 

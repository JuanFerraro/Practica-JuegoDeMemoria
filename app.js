//Necesitamos:

const section = document.querySelector("section");
const cuentaVidasJugador = document.querySelector("span");
let vidasJugador = 5;

//Link de texto
cuentaVidasJugador.textContent = vidasJugador;

/* Generacion de datos: Nombre e imagen */
const getData = () => [
    { imgSrc: './images/colombia.jpg', name: "colombia" },
    { imgSrc: './images/italia.jpg', name: "italia" },
    { imgSrc: './images/españa.jpg', name: "españa" },
    { imgSrc: './images/usa.jpg', name: "usa" },
    { imgSrc: './images/francia.jpg', name: "francia" },
    { imgSrc: './images/venezuela.jpg', name: "venezuela" },
    { imgSrc: './images/holanda.jpg', name: "holanda" },
    { imgSrc: './images/brasil.jpg', name: "brasil" },
    { imgSrc: './images/holanda.jpg', name: "holanda" },
    { imgSrc: './images/colombia.jpg', name: "colombia" },
    { imgSrc: './images/usa.jpg', name: "usa" },
    { imgSrc: './images/francia.jpg', name: "francia" },
    { imgSrc: './images/venezuela.jpg', name: "venezuela" },
    { imgSrc: './images/italia.jpg', name: "italia" },
    { imgSrc: './images/españa.jpg', name: "españa" },
    { imgSrc: './images/brasil.jpg', name: "brasil" },
];

/* Aleatorio */
const aleatorio = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

/* Generacion de HTML para cada card */
const generadorCard = () => {
    const cardData = aleatorio();
    /* Generacion de HTML */
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        /* Tener infor en las cards */
        face.src = item.imgSrc;
        card.setAttribute('name', item.name)

        /* Tener las cards en el section: */
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e)
        })
    });
};

//Revisar cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll('.toggleCard')
    //Logica:
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            vidasJugador--;
            cuentaVidasJugador.textContent = vidasJugador;
            if (vidasJugador === 0) {
                restart("😭 Intenta de nuevo 😭");
            }
        }
    }
    //Si ganó
    if(toggleCard.length === 16){
        restart("💪 Ganaste 💪");
    }
};


//
const restart = (text) => {
    let cardData = aleatorio();
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000)
    })
    vidasJugador = 5;
    cuentaVidasJugador.textContent = vidasJugador;
    setTimeout(() => window.alert(text), 100);
};
generadorCard();
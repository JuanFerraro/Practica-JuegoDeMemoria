//Necesitamos:

const section = document.querySelector("section");
const cuentaVidasJugador = document.querySelector("span");
const vidasJugador = 5;

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

        card.addEventListener('click', (e) =>{
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
    //Logica:
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('match');
        }else{
            console.log("wrong");
        }
    }
}

generadorCard();
// elements
const imgWrapper = document.querySelector('.img-wrapper');


// 1.
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

//2.
for(let i = 0; i < images.length; i++){

    imgWrapper.innerHTML += `<img class="img d-none" src="${images[i]}">`
    
}

// 3.  prendo tutti gli elementi con la classe img
const imgCollection = document.getElementsByClassName("img");

// rimuovo la classe d-none alla prima immagine
imgCollection[0].classList.remove("d-none");

// 4. inizializzo il counter
const counter = 0;

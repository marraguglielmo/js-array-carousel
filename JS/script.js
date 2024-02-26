// elements
const imgWrapper = document.querySelector('.img-wrapper');
const btnTop = document.querySelector(".top")
const btnBottom = document.querySelector(".bottom");
// 4. inizializzo il counter
let counter = 0;

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
imgCollection[counter].classList.remove("d-none");


// 5. al click incremento o decremento il counter
// sopra decremento
btnTop.addEventListener('click', function(){
    counter--;
    console.log(counter);
});

// sotto incremento
btnBottom.addEventListener('click', function(){
    counter++;
    console.log(counter);
});
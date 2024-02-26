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
console.log(images);

//2.

for(let i = 0; i < images.length; i++){

    imgWrapper.innerHTML += `<img class="d-none" src="${images[i]}">`
    
}



# Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## Svolgimento

1. Inserisco tutti i percorsi delle immagini in un array
2. Inserisco in img-wrapper tutti gli elementi html contenenti l'immagine con la classe `d-none`
   - creo un ciclo dell'array e ad ogni ciclo aggiungo l'immagine
3. rimuovo la classe d-none dalla prima immagine
4. inizializzo un `counter = 0`
5. ad ogni click dei bottoni incremento o deremento il counter
6. rimetto la classe d-none all'elemento con l'indice attuale che incremento o decremento
7. tolgo la clase d-none all'elemento a indice contatore
8. ad ogni click devo controllare l'indice
   - se `counter === 0` aggiungo la classe d-none al bottone top
   - se counter = `(images.length - 1)` aggiungo la classe d-none al bottone bottom

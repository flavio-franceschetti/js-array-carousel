// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//CREO L'ARRAY PER LE IMMAGINI
const carlouselImg = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

//prendo il container dove inserire i div con le immagini
const itemsContainer = document.querySelector(".items-container");

//prendo gli elementi degli array con un ciclo
//quindi mettiamo l'array.lenght per prendere la lunghezza dell'array
for (i = 0; i < carlouselImg.length; i++) {
  //racchiudo gli elementi in una variabile
  let itemImg = carlouselImg[i];
  //creo la variabile con l'elemento html usando l variabile creata con gli elementi dell'array
  let itemContent = `<div class="item">
                        <img src="${itemImg}" alt="img1" />
                    </div>`;
  //inserisco l'html nel contenitore
  itemsContainer.innerHTML += itemContent;
}

//per dare la classe active ora ai singoli elementi li racchiudo prima in una variabile
const allItems = document.getElementsByClassName("item");

let activeItem = 0;
//aggiungo la classe active al primo elemento
allItems[activeItem].classList.add("active");

//recupero i bottoni per lo slide
const next = document.querySelector(".next-btn");

//aggiungiamo l'evendo al click della freccia next per scorrere le immagini
next.addEventListener("click", function () {
  //diciamo prima di rimuovere la classe active dall elemento corrente
  allItems[activeItem].classList.remove("active");
  //passiamo all'elemento successivo aggiungendo 1 alla variabile activeItem in modo da passare all'elemento successivo
  activeItem++;
  //e poi naggiungiamo la classe item di nuovo e andrà sull'elemento successivo
  allItems[activeItem].classList.add("active");
});

const prev = document.querySelector(".prev-btn");

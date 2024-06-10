//CREO L'ARRAY PER LE IMMAGINI
const carlouselImg = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

console.log(carlouselImg);

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

//aggiungiamo l'evento al click della freccia next per scorrere le immagini
next.addEventListener("click", function () {
  //creiamo la condizione per verificare se siamo arrivati alla fine dell'array
  //ci sarà l' array.lengt - 1 perché lenght prende gli conta il totale ma gli elementi partono da 0
  if (activeItem < carlouselImg.length - 1) {
    //diciamo prima di rimuovere la classe active dall elemento corrente
    allItems[activeItem].classList.remove("active");
    //passiamo all'elemento successivo aggiungendo 1 alla variabile activeItem in modo da passare all'elemento successivo
    activeItem++;
    //e poi naggiungiamo la classe item di nuovo e andrà sull'elemento successivo
    allItems[activeItem].classList.add("active");
  }
});

const prev = document.querySelector(".prev-btn");

//creo un evento al click della freccia prev per tornare indietro con le immagini

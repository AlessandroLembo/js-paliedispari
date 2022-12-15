console.log(' JS OK ');

/*
TRACCIA: Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
ANALISI: 

1 - Prendo gli elementi dalla pagina.
2 - Aggancio l'event listener al button.
3 - Inserisco un numero nel campo e lo salvo in variabile.
4 - Dichiaro una funzione per generare un numero random per il computer.
5 - Sommiamo i due numeri.
6 - Dichiaro una funzione per controllare se la somma è pari o dispari. 
7 - Stampo in pagina il messaggio.
*/

// 1 - Prendo gli elementi dalla pagina.
const oddEvenElement = document.getElementById('odd-even');
const userNumberElement = document.getElementById('user-number');
const buttonUserChoise = document.getElementById('button-user');
const buttonRandomNumber = document.getElementById('button-random');
const buttonSumNumbers = document.getElementById('button-sum');
const messageElement = document.getElementById('message');
// console.log(oddEvenElement, userNumberElement, buttonUserChoise, buttonRandomNumber, buttonSumNumbers, messageElement);


// 2 - Aggancio l'event listener al button per inserire il numero dell'utente.
      buttonUserChoise.addEventListener('click', function(){

      // 3 - Inserisco un numero nel campo e lo salvo in variabile.
      const userChoise =  userNumberElement.value.trim();
      // console.log(userChoise);
      // messageElement.innerText = userChoise;



})


// 2 - Aggancio l'event listener al button.
buttonSumNumbers.addEventListener('click', function(){
     
    

    // 4 - Dichiaro una funzione per generare un numero random per il computer.
    // function getRandomNumber() {
    //     const randomNumber = Math.floor(Math.random() * 5) + 1;

    //     return randomNumber;
    // }

    // const pcNumber = getRandomNumber();
    // console.log(pcNumber);


})

// function getRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;

//     return randomNumber;
// }

// const pcNumber = getRandomNumber();
// console.log(pcNumber);
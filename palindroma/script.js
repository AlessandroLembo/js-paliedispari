console.log(' JS OK');

/*
TRACCIA: Palindroma

Chiedere all’utente di inserire una parola tramite un form
Creare una funzione per capire se la parola inserita è palindroma
*/

/* 
ANALISI

1 - Prendo gli elementi dalla pagina.
2 - Aggancio l'event listener al button.
3 - Inserisco una parola nel campo.
4 - Dichiaro una funzione in cui sviluppo la logica. 
5 - Controllo se ho inserito almeno 2 caratteri e che non siano numeri.
6 - Controllo se la parola inserita sia palindroma.
7 - Stampo il messaggio in pagina. 
*/

// 1 - Prendo gli elementi dalla pagina.
const wordElement = document.getElementById('word');
const buttonElement = document.getElementById('button');
const messageElement = document.getElementById('message');
// console.log(wordElement, buttonElement, messageElement);
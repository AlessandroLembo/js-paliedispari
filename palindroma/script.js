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
3 - Inserisco una parola nel campo e la salvo in variabile.
4 - Controllo se ho inserito almeno 2 caratteri e che non siano numeri.
5 - Dichiaro una funzione in cui sviluppo la logica. 
6 - Dichiaro una variabile con valore booleano 'false'.
7 - Controllo se la parola inserita sia palindroma.
8 - Stampo il messaggio in pagina. 
*/

// 1 - Prendo gli elementi dalla pagina.
const wordElement = document.getElementById('word');
const buttonElement = document.getElementById('button');
const messageElement = document.getElementById('message');
// console.log(wordElement, buttonElement, messageElement);


// 2 - Aggancio l'event listener al button
buttonElement.addEventListener('click', function(){
    

    // 3 - Inserisco una parola nel campo e la salvo in variabile.
    const valueElement = wordElement.value.trim();
    // console.log(valueElement);

    // 4 - Controllo se ho inserito almeno 2 caratteri e che non siano numeri.
    if (!isNaN(valueElement) || valueElement.length < 2){
        console.log ('Non inserire numeri e inserisci almeno 2 caratteri');
    }
    
    // 5 - Dichiaro una funzione in cui sviluppo la logica.
    function isPalindrome(word){   

       // 6 -  Dichiaro una variabile con valore booleano 'false'.
       let result = false;

       
       return result;
    }
       
})



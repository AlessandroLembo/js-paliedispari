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
5 - Dichiaro una funzione in cui sviluppo la logica per ottenere la parola al contrario.
6 - Dichiaro una variabile d'appoggio.
7 - Apro un ciclo per caricare di volta in volta le lettere della parola.
8 - Salvo la parola invertita in una variabile.
9 - Controllo se la parola è palindroma.
10 - Stampo il messaggio in pagina. 
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

} else {

  /* 5 - Dichiaro una funzione in cui sviluppo la logica
         per ottenere la parola al contrario. */
         function reverseWord(word){   

            // 6 -  Dichiaro una variabile d'appoggio.
            let result = '';
            
            // 7 - Apro un ciclo per caricare di volta in volta le lettere della parola.
            for (let i = valueElement.length - 1; i >= 0; i--){
                 result += valueElement[i];
            }
        
            return result;
        }
    
    // 8 - Salvo la parola invertita in una variabile.
    const reversedWord = reverseWord('');
    console.log(reversedWord); 
}

// 9 - Controllo se la parola inserita è palindroma.
      

})

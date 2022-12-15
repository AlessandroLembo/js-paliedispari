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
2 - Aggancio l'event listener al button per inserire il numero dell'utente.
3 - Inserisco un numero nel campo e lo salvo in variabile.
4 - Controllo se ci sono caratteri non numerici e se i numeri sono compresi tra 1 e 5.
5 - Aggancio l'event listener al button per generare un numero random per il pc.
6 - Dichiaro una funzione per generare un numero random per il computer.
7 - Aggancio l'event listener al button per calcolare.
8 - Dichiaro una funzione per controllare se la somma è pari o dispari. 
9 - Stampo in pagina il messaggio.
*/

// 1 - Prendo gli elementi dalla pagina.
const oddEvenElement = document.getElementById('odd-even');
const userNumberElement = document.getElementById('user-number');
const buttonUserChoise = document.getElementById('button-user');
const buttonRandomNumber = document.getElementById('button-random');
const buttonSumNumbers = document.getElementById('button-sum');
const numberUserElement = document.getElementById('number-user');
const numberPcElement = document.getElementById('number-pc');
const messageElement = document.getElementById('message');
// console.log(oddEvenElement, userNumberElement, buttonUserChoise, buttonRandomNumber, buttonSumNumbers, numberUserElement, numberPcElement, messageElement);


// 2 - Aggancio l'event listener al button per inserire il numero dell'utente.
buttonUserChoise.addEventListener('click', function(){

    // 3 - Inserisco un numero nel campo e lo salvo in variabile.
    const userChoise =  userNumberElement.value.trim();

    /* 4 - Controllo se ci sono caratteri non numerici
           e se i numeri sono compresi tra 1 e 5.*/
    let userNumber = "è dispari";   

    if (userNumberElement.value < 1 || userNumberElement.value > 5) {
      alert('Inserisci un numero compreso tra 1 e 5');
    }  else if (userNumberElement.value % 2 === 0){
        userNumber = "è pari";
    } 

    const resultUser = `Il numero scelto dall'utente è ${userNumberElement.value} ed è ${userNumber}`;

    console.log(resultUser);
    numberUserElement.innerHTML = resultUser;
        

    // 5 - Aggancio l'event listener al button per generare un numero random per il pc.
    buttonRandomNumber.addEventListener('click', function(){
    
    // 6 - Dichiaro una funzione per generare un numero random per il computer.
    function getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 5) + 1;


        let pcNumber = "è dispari";

        if(randomNumber % 2 === 0){
            pcNumber = "è pari";
        }
        
        const resultPc = `Il numero generato dal Pc è ${randomNumber} ed è ${pcNumber}`;
        console.log(resultPc);
        numberPcElement.innerHTML = resultPc;

        return randomNumber;
    }

    const resultPc = getRandomNumber();
    
    /* 7 - Aggancio l'event listener al button per 
           calcolare somma e stampare il messaggio*/
    buttonSumNumbers.addEventListener('click', function(){
        const sumNumbers = parseInt(resultUser) + parseInt(resultPc);
        console.log(sumNumbers); 
       
    })
    
      
})


})
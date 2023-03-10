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
3 - Inserisco i dati e li salvo in variabile.
4 - Controllo se ci sono caratteri non numerici e se i numeri sono compresi tra 1 e 5.
5 - Controllo se ho inserito un'opzione tra pari e dispari.
6 - Dichiaro una funzione per generare un numero random per il computer.
7 - Somma dei numeri.
8 - Dichiaro una funzione per controllare qual è stata la scelta vincente.
9 - Comporre il messaggio da visualizzare.
10 - Stampo in pagina il vincitore.
*/

// 1 - Prendo gli elementi dalla pagina.
const oddEvenElement = document.getElementById('odd-even');
const userNumberElement = document.getElementById('user-number');
const buttonSumNumbers = document.getElementById('button-sum');
const numberUserElement = document.getElementById('number-user');
const numberPcElement = document.getElementById('number-pc');
const messageElement = document.getElementById('message');
// console.log(oddEvenElement, userNumberElement, buttonSumNumbers, numberUserElement, numberPcElement, messageElement);

// 2 - Aggancio l'event listener al button.
buttonSumNumbers.addEventListener('click', function(){

    // 3 - Inserisco i dati e li salvo in variabile.
    const userNumberChoise =  parseInt(userNumberElement.value.trim());
    const userOddEvenChoise = oddEvenElement.value;

    /* 4 - Controllo se ci sono caratteri non numerici
           e se i numeri sono compresi tra 1 e 5.*/
    
    if (isNaN(userNumberChoise) || userNumberChoise < 1 || userNumberChoise > 5) {
    alert('Inserisci un numero compreso tra 1 e 5');
    return;
    }  
    
    // 5 - Controllo se ho inserito un'opzione tra pari e dispari.
    if (!userOddEvenChoise || (userOddEvenChoise !== 'pari' && userOddEvenChoise !== 'dispari')){
        alert('Inserisci pari o dispari');
        return;
    }
    
    let userNumber = "è dispari";

    if (userNumberChoise % 2 === 0){
         userNumber = "è pari";
    }

    const resultUser = `Il numero scelto dall'utente è ${userNumberChoise}`;

    console.log(resultUser);
    numberUserElement.innerHTML = resultUser;

    // 6 - Dichiaro una funzione per generare un numero random per il computer.
    function getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 5) + 1;

        let pcNumber = "è dispari";

        if(randomNumber % 2 === 0){
            pcNumber = "è pari";
        }
        
        const resultPc = `Il numero generato dal Pc è ${randomNumber}`;
        console.log(resultPc);
        numberPcElement.innerHTML = resultPc;

        return randomNumber;
    }


    // 7 - Somma dei numeri.
    const resultPc = getRandomNumber();
    
    const sum = resultPc + userNumberChoise;


    // 8 - Dichiaro una funzione per controllare qual è stata la scelta vincente.
    function isEven(n){
       if(n % 2 === 0){
        return true;
       } else {
        return false;
       }
    }

    const winnerChoise = isEven(sum) ? 'pari' : 'dispari';
    console.log(`Vince chi ha scelto ${winnerChoise}`);

    // 9 - Compongo il messaggio da mostrare in pagina.
    let winner = `La somma è ${sum} ed ha vinto l'utente`;

    if(userOddEvenChoise !== winnerChoise){
        winner = `La somma è ${sum} ed ha vinto il PC`;
    }
    
    // 10 - Stampo in pagina il vincitore.
    messageElement.innerText = winner;
    
})
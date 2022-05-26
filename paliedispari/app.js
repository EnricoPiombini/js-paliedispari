// L’utente sceglie pari o dispari tramite un prompt
// L’utente inserisce anche un numero da 1 a 5.
// Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

// // L’utente sceglie pari o dispari tramite un prompt
// const sceltaPariDispari = prompt('Inserisci pari o dispari');
// console.log(sceltaPariDispari);

//L'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber);

// Generiamo un numero random da 1 a 5 tramite una funzione
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

let randomCpu = randomNumber(1, 5);
console.log(randomCpu);

// Sommiamo il numero inserito dall'utente e quello generato casualmente dal computer
let sumUserCpu = randomCpu + userNumber;
console.log(sumUserCpu);

// Stabiliamo se la somma dei numeri è pari o dispari con una funzione
function even(number) {
    const result = number % 2 === 0;
    return result;
    }
console.log(even(sumUserCpu));
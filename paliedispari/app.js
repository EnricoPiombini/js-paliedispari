// L’utente sceglie pari o dispari tramite un prompt
// L’utente inserisce anche un numero da 1 a 5.
// Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

const sceltaPariDispari = prompt('Inserisci pari o dispari');
console.log(sceltaPariDispari);


// Generiamo un numero random per il pc da 1 a 5
function numberCpu(min, max) {
    const randomCpu = Math.floor(Math.random()*(max- min + 1)) + min;
   return randomCpu;

};
console.log(numberCpu(1,5))






// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parola = "osso";


// CICLO AL CONTRARIO PER LEGGERE LETTERA PER LETTERA FINO ALLA FINE
// MANO A MANO CHE LE LEGGO LE INSERISCO DENTRO ALLA STRINGA PER COMPORRE LA PAROLA AL CONTRARIO

function revertWord(parola) {
    let parolaContrario = "";

    for (let i = parola.length; i >= 0; i--) {
        const letteraCorrente = parola[i];
        console.log(letteraCorrente);
        parolaContrario += letteraCorrente;
    }
    return parola;
}

function isPalindroma (parolaDaControllare){
    const parolaInvertita = revertWord (parola);
    console.log(parolaInvertita);
    return parolaDaControllare === parolaInvertita;
}
console.log(isPalindroma(parola));
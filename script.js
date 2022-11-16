// --------------- ES Pari Dispari ---------------

let parolaUtente = prompt("Inserisci una parola");

let parolaLowerCase = parolaUtente.toLowerCase();

parPal = palilap(parolaLowerCase);

if (parPal){
    console.log("La parola " + parolaUtente + " è Palindroma");
} else {
    console.log("La parola " + parolaUtente + " non è Palindroma");
}

function palilap(string){
    for(let i = 0; i < string.length; i++){
        if(!(string[i]==string[string.length-1-i])){
            return false;
        }
    }
    return true;
}


// --------------- ES Pari Dispari ---------------

let scelta = prompt("Pari o Dispari?").toLowerCase();

while(scelta !== "pari" && scelta !== "dispari"){
    alert ("Ti ho detto che puoi scegliere solo tra pari e dispari, lurido analfabeta");
    scelta = prompt("Pari o Dispari?").toLowerCase();
}


let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

while(numeroUtente > 5 || numeroUtente < 1){
    alert ("Ci risiamo maledetta scimmia, puoi scegliere solo un numero da 1 a 5");
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
}

let numeroBanco = randomBanco(1,5);
console.log(numeroBanco);

let somma = numeroUtente + numeroBanco;

if(check(somma) == "pari" && scelta == "pari"){
    console.log("Hai vinto!!");
} else if (check(somma) == "dispari" && scelta == "dispari") {
    console.log("Hai vinto!!");
} else{
    console.log("Hai perso!!");
}

function randomBanco(min, max){
    let numeroCasuale = Math.random()* (max - min) + min;
    return Math.round(numeroCasuale);
}


function check(num){
    if (num % 2 == 0){
        console.log("pari");
        return "pari";
    }else{
        console.log("dispari");
        return "dispari";
    }
}
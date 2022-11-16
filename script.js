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
/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

const nameHello = (name) => "Ciao" + " " + name;

// Invoca la funzione qui e stampa il risultato in console
console.log(nameHello(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

const hourHello = (namehello) => {
  dateHour = new Date() + " " + namehello;

  if ((dateHour = new Date(0, 13) === "buongiorno"));
  else if ((dateHour = new Date(14, 17) === "pomeriggio"));
  else {
    dateHour = new Date(15, 23) === "pomeriggio";
  }
  return dateHour;
};
// Invoca la funzione qui e stampa il risultato in console

console.log(hourHello(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

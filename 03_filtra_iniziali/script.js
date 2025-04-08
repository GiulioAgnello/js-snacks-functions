/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const firstChar = (word, initial) => {
  const filteredName = [];
  for (i = 0; i < word.length; i++) {
    const currentChar = word[i];

    if (currentChar[0] === initial) {
      filteredName.push(currentChar);
    }
  }
  return filteredName;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(firstChar(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

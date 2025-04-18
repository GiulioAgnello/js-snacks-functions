/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const countVowels = (WordStart) => {
  let vowelsNumber = 0;
  for (let i = 0; i < WordStart.length; i++) {
    const currentChar = WordStart[i];

    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      vowelsNumber += 1;
    }
  }
  return vowelsNumber;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)

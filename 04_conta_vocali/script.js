/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const countVowels = (WordStart) => {
  let vowelsNumber = 0;
  for (let i = 0; i < WordStart.length; i++) {
    const currentChar = WordStart[i];

    if (
      currentChar === "a" ||
      currentChar === "a" ||
      currentChar === "a" ||
      currentChar === "a" ||
      currentChar === "a"
    ) {
      vowelsNumber += 1;
    }
  }
  return vowelsNumber;
};
console.log(countVowels(word));

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

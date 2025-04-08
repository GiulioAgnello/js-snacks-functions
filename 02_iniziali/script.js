/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

const firstChar = (nameList) => {
  let firstCharlist = [];
  for (let i = 0; i < nameList.length; i++) {
    const currentChar = nameList[i];

    firstCharlist.push(currentChar[0]);
  }
  return firstCharlist;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

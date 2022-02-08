// https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f#:~:text=Uma%20fun%C3%A7%C3%A3o%20recursiva%20sempre%20precisa,grande%20problema%20em%20problemas%20menores.
// https://ichi.pro/pt/merge-sort-javascript-248413807402822

const notes = [
    {
      studentName: 'Andre',
      note: 4
    },
    {
      studentName: 'Mariana',
      note: 5
    },
    {
      studentName: 'Carlos',
      note: 8.5
    },
    {
      studentName: 'Paulo',
      note: 9
    },
    {
      studentName: 'Jonas',
      note: 3
    },
    {
      studentName: 'Juliana',
      note: 6.7
    },
    {
      studentName: 'Guilherme',
      note: 7
    },
    {
      studentName: 'Lucia',
      note: 9.3
    },
    {
      studentName: 'Ana',
      note: 10
    }
  ]

// código desenvolvido de acordo com referências citadas acima, estudando o conceito de recursividade.
// Array de objetos, exemplo do curso Alura

const mergeSort = (arrNotes) => {

  if (arrNotes.length < 2) {
      return arrNotes;
  }

  const middle = Math.floor(arrNotes.length / 2);
  let leftSide = arrNotes.slice(0, middle);
  let rightSide = arrNotes.slice(middle);

  leftSide = mergeSort(leftSide);
  rightSide = mergeSort(rightSide);

  let sortedArray = [];
  while (leftSide.length && rightSide.length) {
      if (leftSide[0].note < rightSide[0].note) {
          sortedArray.push(leftSide.shift());
      } else {
          sortedArray.push(rightSide.shift());
      }
  }
  
  if (leftSide.length) sortedArray = sortedArray.concat(leftSide);
  if (rightSide.length) sortedArray = sortedArray.concat(rightSide);

  return sortedArray;
}

console.log(mergeSort(notes));
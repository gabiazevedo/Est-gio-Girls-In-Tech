const notesOne = [
  {
    studentName: 'Andre',
    studentsNote: 4
  },
  {
    studentName: 'Mariana',
    studentsNote: 5
  },
  {
    studentName: 'Carlos',
    studentsNote: 8.5
  },
  {
    studentName: 'Paulo',
    studentsNote: 9
  },
]

const notesTwo = [
  {
    studentName: 'Jonas',
    studentsNote: 3
  },
  {
    studentName: 'Juliana',
    studentsNote: 6.7
  },
  {
    studentName: 'Guilherme',
    studentsNote: 7
  },
  {
    studentName: 'Lucia',
    studentsNote: 9.3
  },
  {
    studentName: 'Ana',
    studentsNote: 10
  },
]

function mergeSort(notes1, notes2) {
  let result = []; //novo array ordenado 
  let currentNote1 = 0; // variável que guarda o elemento atual do array 1
  let currentNote2 = 0; // variável que guarda o elemento atual do array 2
  let currentValue = 0; // variável que percorrerá os dois arrays

  while (currentNote1 < notes1.length && currentNote2 < notes2.length) {
    if (notes1[currentNote1].studentsNote < notes2[currentNote2].studentsNote) {
      result[currentValue] = notes1[currentNote1].studentsNote;
      currentNote1++;
    } else {
      result[currentValue] = notes2[currentNote2].studentsNote;
      currentNote2++;
    }
    currentValue++;
  }

  while (currentNote1 < notes1.length) {
    result[currentValue] = notes1[currentNote1].studentsNote;
    currentNote1++;
    currentValue++;
  }

  while (currentNote2 < notes2.length) {
    result[currentValue] = notes2[currentNote2].studentsNote;
    currentNote2++;
    currentValue++;
  }
  return result;
}
console.log(mergeSort(notesOne, notesTwo));

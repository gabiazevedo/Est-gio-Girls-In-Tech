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

const quiqkSort = (array) => {
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  let pivot = array[0].note;

  let smallerThanPivot = array.filter((studentNote) => studentNote.note < pivot);
  let equal = array.filter((studentNote) => studentNote.note === pivot);
  let greaterThanPivot = array.filter((studentNote) => studentNote.note > pivot);
  
  return quiqkSort(smallerThanPivot).concat(equal).concat(quiqkSort(greaterThanPivot));
}

console.log(quiqkSort(notes));
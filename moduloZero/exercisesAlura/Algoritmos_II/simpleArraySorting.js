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

const simpleMergeSort = (notes1, notes2) => {
  const unsortedArr = [...notes1, ...notes2];
  const sortedNotes = unsortedArr.sort((a, b) => a.studentsNote - b.studentsNote)
    .map((note) => note.studentsNote);
  return sortedNotes;
}
console.log(simpleMergeSort(notesOne, notesTwo));
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

const sortedArr = notes.sort((a, b) => a.note - b.note)
  .map((n) => n.note);
console.log(sortedArr);
const notes = [
  {
    studentName: 'Jonas',
    note: 3
  },
  {
    studentName: 'Andre',
    note: 4
  },
  {
    studentName: 'Mariana',
    note: 5
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
    studentName: 'Carlos',
    note: 8.5
  },
  {
    studentName: 'Paulo',
    note: 9
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

const binarySearch = (array, start, end, target) => {
  if(end >= start) {
    const middle = Math.floor((end + start) / 2);
    const current = array[middle];
    if(current.note === target) {
      return target;
    }
    if(current.note > target) {
      return binarySearch(array, start, middle-1, target);
    }
    return binarySearch(array, middle+1, end, target);
  }
  return 'Número não encontrado';
}

console.log(binarySearch(notes, 0, notes.length - 1, 5));
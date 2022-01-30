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

function mergeSortOneArray(arrNotes, initialVal, endVal) {
  const sortedArr = [];
  let currentVal = 0;
  let currentVal1 = initialVal;
  let middleVal = Math.floor(arrNotes.length / 2);
  console.log(middleVal);
  while(currentVal1 < middleVal && middleVal < endVal) {
    if (arrNotes[currentVal1].note < arrNotes[middleVal].note) {
      sortedArr[currentVal] = arrNotes[currentVal1].note;
      currentVal1++;
    } else {
      sortedArr[currentVal] = arrNotes[middleVal].note;
      middleVal++;
    }
    currentVal++;
  }
  while(currentVal1 < middleVal) {
    sortedArr[currentVal] = arrNotes[currentVal1].note;
    currentVal1++;
    currentVal++;
  }
  while(middleVal < endVal) {
    sortedArr[currentVal] = arrNotes[middleVal].note;
    middleVal++;
    currentVal++;
  }

  return sortedArr;
}
console.log(mergeSortOneArray(notes, 0, notes.length));

// Verificar algoritmo, números se repetindo na saída, ainda não consegui identificar o motivo.
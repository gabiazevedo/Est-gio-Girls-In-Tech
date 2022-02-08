var input = require('fs').readFileSync('./unsolved/2807-iccanobif/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines);

let array = [1, 1];

for(i = 2; i < n; i++){
    array.push(array[i-1] + array[i-2]);
    }

for(i = n-1; i >= 1; i--){
    console.log(array[i] + " ");
    }
    console.log(array[0] + " ");




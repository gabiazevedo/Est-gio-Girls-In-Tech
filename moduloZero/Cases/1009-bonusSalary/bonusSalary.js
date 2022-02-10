var input = require('fs').readFileSync('./moduloZero/Cases/1009-bonusSalary/stdin', 'utf8');
var lines = input.split('\n');

const [name, salary, sales] = lines;

const comission = Number(sales) * (15 / 100);
const totalSalary = Number(salary) + comission;

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
console.log(`O funcionário ${name} recebeu um TOTAL = R$ ${totalSalary.toFixed(2)} de salário + comissão.`)
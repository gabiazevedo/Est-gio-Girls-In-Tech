var input = require('fs').readFileSync('./moduloZero/Cases/3343-attackOnGasparini/stdin', 'utf8');
var lines = input.split('\n');

const [_titans, fortressLife] = lines[0].split(' ');  // numeros de ataques | vida da fortaleza
const fortressMonsters = Array.from(lines[1]); // etiquetas de tamanho dos titãns
const [damageP, damageM, damageG] = lines[2].split(' '); // quantidade de dano em números

let countDamage = 0;

const monsterDict = {
  'P': Number(damageP),
  'M': Number(damageM),
  'G': Number(damageG)
};

for (let i = 0; i < fortressMonsters.length; i += 1) {
  countDamage += monsterDict[fortressMonsters[i]];
}
let walls = Math.ceil(countDamage / fortressLife);

console.log(walls);
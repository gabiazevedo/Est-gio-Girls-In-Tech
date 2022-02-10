import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12482279720);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Ana', 5000, 12479834509);
gerente.cadastrarSenha('123');
// a palavra 'static' serve tanto para propriedades estáticas quanto para métodos
const cliente = new Cliente('Lais', 78967543212, '456');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const clienteLogado = SistemaAutenticacao.login(cliente, '456');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteLogado);

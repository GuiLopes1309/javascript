//Criem dois arquivos em Javascript, onde vocês montem uma lógica para guardar informações dos dados Bancários e dados pessoais do cliente X. É necessário criar variáveis para guardar informações como tipo de conta, valor na conta, tipo de cartão, e ao final executar no console.log. Essas 


let primeiroNome = 'Guilherme';
let ultimoNome = 'Tomaz';
let nomeCompleto = primeiroNome + ' ' + ultimoNome;

let idadeNumero = 18;
let cpfDocumento = 92022902909;
let rgDocumento = 604454439;
let enderecoLocal = 'Rua DomBosco';

let tipoConta = 'Corrente';
let tipoCartao = 'Black';
let digitosCartao = 1234;
let saldoBancario = 1666;


let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
let dadosCompletos = `\n ${idadeNumero} \n ${cpfDocumento} \n ${rgDocumento} \n ${enderecoLocal}`;
let dadosConta = `\n ${tipoConta} \n ${tipoCartao} \n ${digitosCartao} \n ${saldoBancario}`;

let informacoes = `${nomeCompletoTemplate} ${dadosCompletos} ${dadosConta}` 

console.log(informacoes);

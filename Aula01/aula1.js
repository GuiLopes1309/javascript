let aspasSimples = 'Testando minha String com aspas simples';

//String em resumo são Texto que podem ser utilizados no javascript
//e para utiliza-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "string com aspas Duplas";

//Exemplo de string com aspas Duplas.

let templateLiteral = `String interpollation allows embedding expressions like ${1 + 1}.`;

//Essa é uma String Template, basicamente usados em casos onde há a necessidade de realizar uma ação arítimetica (como no exemplo) ou quando guardamos alguma variáverl dentro dela.
//O símbolo ${} em Javascrít é usado para interpolar variáveis, ou seja, para retornar o valor dela.

//Veja abaixo exemplo de como e quando usra as crases
let nome = 'Guilherme';
let idade = 18; //Número usados sem aspas (simples ou duplas)

let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos`;

console.log(mensagem);

console.log(templateLiteral);

let primeiroNome = 'John'
let ultimoNome = 'Doe'
let nomeCompleto = primeiroNome + ' ' + ultimoNome; //Usando o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; //Using template literal

console.log(nomeCompletoTemplate);
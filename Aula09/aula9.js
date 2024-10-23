const usuario = {
    nome: 'Guilherme',
    idade: 18,
    time: 'São Paulo'
}

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Alvi-Negro!';

//SE o usuário for torcedor do São Paulo, irá aparecer o Mensagem1
if (usuario.time === 'São Paulo') {
    console.log(mensagemDeBoasVindas1);

} else { //Caso contrário irá aparecer a mensagem2
    console.log(mensagemDeBoasVindas2);
}
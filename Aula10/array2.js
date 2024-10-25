let matrizVendas = [
    [100, 200, 300], //Loja A índice 0 
    [400, 500, 50], //Loja B índice 1
    [700, 400, 450], //Loja C índice 2
]

// console.log(matrizVendas);

matrizVendas[0][1] = 800; //indo no índice 0 (Loja A) e buscando o índice interno do elemento. 
console.log(matrizVendas[0]); //Fazendo a impressão da Loja A no Terminal 


matrizVendas[1][2] = 350; //indo no índice 0 (Loja B) e buscando o índice interno do elemento.
console.log(matrizVendas[1]); //Fazendo a impressão da Loja B no Terminal


matrizVendas[2][0] = 600; //indo no índice 0 (Loja C) e buscando o índice interno do elemento.
console.log(matrizVendas[2]); //Fazendo a impressão da Loja C no Terminal


let resultadoLojaB = matrizVendas[1][0] + 
matrizVendas[1][1] + matrizVendas [1][2];
console.log(resultadoLojaB);
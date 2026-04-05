/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes: 
             25291244-2 -  Juliano Henrique Costa
             25260842-2 -  Pedro Rocha Reis
             25000914-2 -  Lucas de Freitas Ferreira de Oliveira
             25363470-2 -  Fernando Araujo Alvim
             25363563-2 -  Sara Kerstin Miguel
Data: 10 de abril de 2026
Descritivo: Faça uma função que receba um array e retorne a soma de seus elementos.
*******************************************************************************/

const prompt = require('prompt-sync')();

// 1. Definição da Função
function somarElementos(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]; // Soma o valor atual ao total
    }
    return soma;
}

// 2. Captura dos dados
let numeros = [];
console.log("Vamos somar 3 números:");

for (let i = 1; i <= 3; i++) {
    let valor = parseFloat(prompt(`Digite o ${i}º número: `));
    
    // Validação básica: se não for número, vira 0 para não quebrar a conta
    if (isNaN(valor)) {
        console.log("Valor inválido, considerando como 0.");
        valor = 0;
    }
    
    numeros.push(valor); // Adiciona o número ao array
}

// 3. Execução e Exibição
const resultado = somarElementos(numeros);
console.log(`---`);
console.log(`O array gerado foi: [${numeros}]`);
console.log(`A soma total dos elementos é: ${resultado}`);
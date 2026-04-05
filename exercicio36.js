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
Descritivo: Use `.reduce()` para somar todos os elementos de um array.
*******************************************************************************/

const prompt = require('prompt-sync')();

let numeros = [];
const quantidade = 5; // Vamos pedir 5 números

// 1. Entrada de dados (Igual ao exercício anterior)
console.log(`Digite ${quantidade} números para somarmos:`);
for (let i = 1; i <= quantidade; i++) {
    let n = parseFloat(prompt(`${i}º número: `));
    if (!isNaN(n)) {
        numeros.push(n);
    } else {
        console.log("Valor inválido ignorado.");
    }
}

// 2. O Método .reduce()
// acumulador: guarda a soma parcial
// atual: o número da vez no array
const somaTotal = numeros.reduce((acumulador, atual) => {
    return acumulador + atual;
}, 0); // O '0' é o valor inicial do acumulador

// 3. Saída
console.log("\n--- Resultado ---");
console.log(`Números digitados: [${numeros}]`);
console.log(`A soma total calculada com .reduce é: ${somaTotal}`);
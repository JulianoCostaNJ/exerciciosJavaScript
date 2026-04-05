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
Descritivo: Use `.forEach()` com Arrow Function para imprimir cada item de um array
*******************************************************************************/

const prompt = require('prompt-sync')();

let frutas = [];

console.log("Vamos criar uma lista de 3 frutas:");

// 1. Preenchendo o array
for (let i = 1; i <= 3; i++) {
    let fruta = prompt(`Digite a ${i}ª fruta: `);
    frutas.push(fruta);
}

console.log("\n--- Imprimindo a lista com .forEach ---");

// 2. Usando o .forEach com Arrow Function
// O primeiro parâmetro (item) é o valor, o segundo (index) é a posição
frutas.forEach((item, index) => {
    console.log(`${index + 1}. Fruta: ${item}`);
});
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
Descritivo:Use `.find()` para encontrar o primeiro número maior que 10 em um array.
*******************************************************************************/

const prompt = require('prompt-sync')();

let listaNumeros = [];

// 1. Coleta de 5 números
console.log("Digite 5 números para preencher a lista:");
for (let i = 1; i <= 5; i++) {
    let entrada = parseFloat(prompt(`${i}º número: `));
    
    // Validando se é um número válido
    if (isNaN(entrada)) {
        console.log("Isso não é um número! Vou considerar como 0.");
        entrada = 0;
    }
    
    listaNumeros.push(entrada);
}

// 2. Aplicação do .find()
// Buscamos o primeiro elemento que satisfaça a condição ( > 10 )
const resultado = listaNumeros.find(n => n > 10);

// 3. Exibição do Resultado
console.log("\n--- Resultado da Busca ---");
console.log("Sua lista:", listaNumeros);

if (resultado !== undefined) {
    console.log(`O primeiro número maior que 10 que você digitou foi: ${resultado}`);
} else {
    console.log("Você não digitou nenhum número maior que 10.");
}
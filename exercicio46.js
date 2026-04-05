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
Descritivo: Crie uma Higher-Order Function que receba uma função e retorne outra função que execute a primeira 
duas vezes.
*******************************************************************************/

const prompt = require('prompt-sync')();

// 1. A Higher-Order Function (A "Fábrica")
// Ela recebe 'fn' (uma função) como parâmetro
function repetirDuasVezes(fn) {
    // Ela retorna uma NOVA função
    return function() {
        fn(); // Executa a primeira vez
        fn(); // Executa a segunda vez
    };
}

// 2. Uma função simples para testar
const dizerOla = () => {
    console.log("Olá, mundo! 👋");
};

// 3. Criando a função turbinada
const dizerOlaDuasVezes = repetirDuasVezes(dizerOla);

// 4. Executando
console.log("--- Executando a função retornada ---");
dizerOlaDuasVezes();
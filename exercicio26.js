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
Descritivo: Crie uma função com parâmetro padrão: `digaOla(nome = 'Visitante')`.
*******************************************************************************/

const prompt = require('prompt-sync')();

// 1. Definição da função com o valor padrão 'Visitante'
function digaOla(nome = 'Visitante') {
    console.log(`Olá, ${nome}! Seja bem-vindo(a).`);
}

// 2. Testando as duas situações:

console.log("--- Teste 1: Com entrada do usuário ---");
const nomeUsuario = prompt("Digite seu nome (ou aperte Enter para pular): ");

// Se o usuário apenas der Enter, a string será vazia (""). 
// Para o parâmetro padrão ser ativado, o valor precisa ser 'undefined'.
if (nomeUsuario === "") {
    digaOla(); // Chama sem passar nada, ativando o 'Visitante'
} else {
    digaOla(nomeUsuario); // Passa o nome digitado
}

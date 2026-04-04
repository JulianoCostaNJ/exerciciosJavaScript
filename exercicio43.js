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
Descritivo: Crie uma função `operacao(a, b, callback)` que execute o callback com a e b.
*******************************************************************************/

function operacao(a, b, callback) {
  return callback(a, b);
}

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

console.log(operacao(10, 5, soma));
console.log(operacao(10, 5, subtracao));
console.log(operacao(10, 5, multiplicacao));
console.log(operacao(10, 5, divisao));

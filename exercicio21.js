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
Descritivo: Crie uma função `soma(a, b)` que retorne a soma de dois números.
*******************************************************************************/
function soma(a, b) {
  return a + b;
}
const prompt = require("prompt-sync")();// Importa a biblioteca prompt-sync para ler a entrada do usuário
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let resultado = soma(num1, num2);// Chama a função soma com os números fornecidos pelo usuário e armazena o resultado
console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);

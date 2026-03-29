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
Descritivo: Faça um script que receba a idade de uma pessoa e diga se ela pode votar (16 anos ou mais)
*******************************************************************************/
const prompt = require('prompt-sync')();
let idade = parseInt(prompt("Digite a idade da pessoa:"));

if (idade >= 16) {
    console.log("A pessoa pode votar.");
} else {
    console.log("A pessoa não pode votar.");
}
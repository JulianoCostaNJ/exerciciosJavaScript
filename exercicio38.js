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
Descritivo: E Dada uma frase, conte quantas palavras ela possui (use `split`).
*******************************************************************************/
// A frase que queremos analisar
const frase = "JavaScript é uma linguagem essencial para o desenvolvimento web";

// 1. Usamos o .split(" ") para quebrar a frase onde houver um espaço
const palavrasArray = frase.split(" ");

// 2. A propriedade .length nos diz quantos itens existem no Array gerado
const totalDePalavras = palavrasArray.length;

// Exibindo os resultados no console
console.log("Frase analisada:", frase);
console.log("Array de palavras:", palavrasArray);
console.log(`A frase possui ${totalDePalavras} palavras.`);
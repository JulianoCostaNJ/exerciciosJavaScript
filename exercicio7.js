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
Descritivo:   Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).
*******************************************************************************/
// Definição das variáveis de entrada
const peso = 70; // Peso em kg
const altura = 1.75; // Altura em metros

// Cálculo do IMC: Peso dividido pela altura ao quadrado
const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

// Estrutura de Decisão para Classificação
if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Classificação: Peso Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}
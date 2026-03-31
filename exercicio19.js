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
Descritivo: Dado um array de números, use um loop para encontrar o maior valor
*******************************************************************************/
const numeros = [15, 42, 7, 89, 23, 91];


let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    
    if (numeros[i] > maior) {
        maior = numeros[i]; 
    }
}

console.log("O maior valor do array é:", maior);
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
Descritivo:  Encadeie `.filter()` e `.map()`: filtre pares e depois eleve ao quadrado.
*******************************************************************************/
// Nosso array inicial de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Encadeamento (Chaining):
 * 1. .filter() -> Retorna um novo array apenas com os números pares.
 * 2. .map()    -> Pega o resultado do filtro e eleva cada item ao quadrado.
 */
const resultado = numeros
    .filter(num => num % 2 === 0)    // Filtra: sobra [2, 4, 6, 8, 10]
    .map(num => num * num);          // Mapeia: resulta em [4, 16, 36, 64, 100]

// Exibindo no console do VS Code
console.log("Array Original:", numeros);
console.log("Apenas Pares ao Quadrado:", resultado);
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
Descritivo:Implemente uma função recursiva para calcular o fatorial.
*******************************************************************************/
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * calcularFatorial(n - 1);
}

const numero = 5;
const resultado = calcularFatorial(numero);

console.log(`O fatorial de ${numero} é: ${resultado}`);
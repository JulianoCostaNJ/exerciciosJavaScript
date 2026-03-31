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
Descritivo: Crie uma função `criarMultiplicador(multiplicador)` que retorne uma função que multiplica qualquer número 
pelo multiplicador (Closure)
*******************************************************************************/
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(duplicar(10)); 
console.log(triplicar(10)); 
console.log(duplicar(5)); 
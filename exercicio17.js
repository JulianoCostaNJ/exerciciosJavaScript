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
Descritivo: Calcule o fatorial de um número informado (ex: 5! = 5*4*3*2*1).
*******************************************************************************/
// Informe o número que deseja calcular o fatorial
const numero = 5; 
let fatorial = 1;

// Verificação para números negativos (não existe fatorial de número negativo)
if (numero < 0) {
    console.log("Não existe fatorial de número negativo.");
} else if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é: 1`);
} else {
    // Estrutura de Repetição (Loop For)
    // Começamos o contador 'i' no valor do número e vamos diminuindo até 1
    for (let i = numero; i >= 1; i--) {
        fatorial *= i; // O mesmo que: fatorial = fatorial * i
    }

    console.log(`O fatorial de ${numero}! é: ${fatorial}`);
}
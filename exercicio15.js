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
Descritivo:  Use um `while` para contar regressivamente de 10 até 0.
*******************************************************************************/

// 1. Iniciamos a variável com o valor de partida
let contador = 10;

console.log("Iniciando contagem regressiva...");

// 2. A condição: "Enquanto o contador for maior ou igual a zero"
while (contador >= 0) {
    console.log(contador); // Exibe o número atual
    
    // 3. Decremento: Diminuímos 1 do valor a cada volta
    // Isso é fundamental para não travar o navegador em um loop infinito
    contador--; 
}

console.log("Feliz Ano Novo!");
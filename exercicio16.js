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
Descritivo: Crie um loop que pare (`break`) quando encontrar o número 7 em uma contagem de 1 a 10.
*******************************************************************************/

console.log("Iniciando a contagem...");

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Número 7 encontrado! Parando o loop...");
        break; // Interrompe o loop imediatamente
    }
    console.log("Número: " + i);
}

console.log("Loop finalizado.");
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
Descritivo: Escreva uma função que receba um número e retorne `true` se for primo, `false` caso contrário
*******************************************************************************/
/**
 * Função para verificar se um número é primo
 * @param {number} num - O número a ser testado
 * @returns {boolean} - true se for primo, false se não for
 */
function ePrimo(num) {
    // 1. Números menores ou iguais a 1 não são primos
    if (num <= 1) {
        return false;
    }

    // 2. Loop para testar divisores de 2 até a raiz quadrada do número
    // (Testar até a raiz quadrada é uma otimização matemática comum)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Se o resto da divisão por 'i' for 0, o número não é primo
        if (num % i === 0) {
            return false; // Retorno imediato: encontrou um divisor
        }
    }

    // 3. Se o loop terminar sem encontrar divisores, o número é primo
    return true;
}

// --- Exemplos de Uso ---
console.log(`O número 7 é primo? ${ePrimo(7)}`);   // Saída: true
console.log(`O número 10 é primo? ${ePrimo(10)}`); // Saída: false
console.log(`O número 2 é primo? ${ePrimo(2)}`);   // Saída: true
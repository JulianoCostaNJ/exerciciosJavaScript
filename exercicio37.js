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
Descritivo:Verifique se um array contém o elemento "Maçã" usando `.includes()`
*******************************************************************************/
// Criando o array de frutas
const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pera"];

// Verificando a existência do elemento "Maçã"
const temMaca = frutas.includes("Maçã");

// Exibindo o resultado no console do VS Code
if (temMaca) {
    console.log("Sim, a fruta 'Maçã' está na lista!");
} else {
    console.log("Não encontramos 'Maçã' no array.");
}

// Exemplo extra: O método diferencia maiúsculas de minúsculas (Case Sensitive)
console.log("Existe 'maçã' (minúsculo)?", frutas.includes("maçã")); // Retornará false
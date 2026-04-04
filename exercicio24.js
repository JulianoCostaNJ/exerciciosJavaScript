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
Descritivo: Crie uma função que converta graus Celsius para Fahrenheit
*******************************************************************************/

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusParaFahrenheit(0)); 
console.log(celsiusParaFahrenheit(100)); 
console.log(celsiusParaFahrenheit(37));  

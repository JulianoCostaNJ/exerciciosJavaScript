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
Descritivo:  Verifique se um caractere informado é uma vogal ou consoante.
*******************************************************************************/
let caractere = 'y';
let letra = caractere.toLowerCase();

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`'${caractere}' é uma vogal.`);
        break;
    default:
       
        if (letra >= 'a' && letra <= 'z') {
            console.log(`'${caractere}' é uma consoante.`);
        } else {
            console.log("Não é uma letra válida.");
        }
}
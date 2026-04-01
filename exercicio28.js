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
Descritivo:  Crie uma função que retorne um objeto com `nome` e `idade` da pessoa.
*******************************************************************************/
/**
 * Função: criarPessoa
 * Parâmetros: nome (String), idade (Number)
 * Retorno: Objeto contendo os dados recebidos
 */
function criarPessoa(nomeInformado, idadeInformada) {
    // Criamos o objeto e atribuímos os parâmetros às propriedades
    const pessoa = {
        nome: nomeInformado,
        idade: idadeInformada
    };

    return pessoa; // Retorna o objeto completo
}

// --- Execução no VS Code ---

// Chamamos a função e armazenamos o objeto retornado em uma constante
const usuario = criarPessoa("Sara", 25);

// Acessando as propriedades do objeto retornado
console.log("Objeto completo:", usuario);
console.log(`Olá, meu nome é ${usuario.nome} e tenho ${usuario.idade} anos.`);
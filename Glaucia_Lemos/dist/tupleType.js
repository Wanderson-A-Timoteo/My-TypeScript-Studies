"use strict";
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Wanderson Timóteo', 'Desenvolvedor de Sistemas', 38];
// pessoa = [38, 'Desenvolvedor de Sistemas', 'Wanderson Timóteo']; Error sintax
console.log(pessoa);
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Wanderson Timóteo', 'Desenvolvedor de Sistemas', 38];
console.log(pessoa1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2 = ['Wanderson Timóteo', 'Desenvolvedor de Sistemas', 38];
console.log(pessoa2);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Wanderson', 'Jeane'], [38, 39]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Wanderson', 'Timóteo'));
console.log(criarPessoa('Wanderson', 'de Almeida', 'Timóteo'));

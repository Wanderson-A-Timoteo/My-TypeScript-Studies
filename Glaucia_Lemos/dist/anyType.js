"use strict";
// ==> Exemplo 01: Tipo Any
const a = 38;
const b = ['Wanderson'];
const result = a + b;
console.log(result);
// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
let frase;
frase = 'Oi, pessoal! Tudo bem?';
console.log(frase);
// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'Wanderson',
    sobrenome: 'Timóteo',
    idade: 38,
};
console.log(formulario);

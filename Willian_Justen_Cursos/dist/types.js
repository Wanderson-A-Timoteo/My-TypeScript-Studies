"use strict";
// Tipos de variaveis no TypeScript
// Tipo boolean
let isOpen;
isOpen = true;
console.log(isOpen);
// Tipo String: ('foo', "foo", `foo`)
let message1, message2, message3;
message1 = 'Wanderson';
message2 = "Almeida";
message3 = `${message1} ${message2} Timóteo`;
console.log(message3);
// Tipo number: funciona para int, floalt, hexadecimal ou binario
let num1, num2, hexadecimal;
num1 = 20;
num2 = 41.3;
hexadecimal = 0xff0;
console.log(`Número 1: ${num1}, Número 2: ${num2}, Hexadecimal: ${hexadecimal}`);
// Tipo array:  (precisamos dizer o tipo e passar o array, exemplo type[])
// boolean[], string[], number[]
let arrayNum;
arrayNum = [1, 2, 3];
let arrayString;
arrayString = ['Wanderson', "Timóteo"];
// Tipo Array<> com notação Generic
let arrayGeneric;
arrayGeneric = [1, 2, 3];
// Tipo tuple: é um array porém já sabenos seu tipo e o numero de elementos dentro dele
let tupla;
tupla = [2, 'Wanderson'];
let newTupla;
newTupla = [2, 'Wanderson', 'Timóteo'];
// Tipo enum:  é um enumerador que serve para criar um conjunto de chave valor. 
// Ele é criado como se fosse um objeto, usado para definir nome para parametros complicados 
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["Preto"] = "#000";
})(Colors || (Colors = {}));
// Tipo any: é qualquer coisa, ou seja, podemos atribuir qualquer tipo, porém ele NÃO É LEGAL
let anyNum, anyArray, anyString;
anyNum = 1;
anyArray = [1, 2, 3];
anyString = 'Wanderson';
// Tipo void: é vazio, ele não retorna nada, usado em funções que não tem retorno.
function logger() {
    console.log('foo');
}
// Não faz sentido definir uma variavel como null, pois depois não poderemos mudar seu valor
let variable;
// Tipo never : definimos que numca terá um retorno
function error() {
    throw new Error("error");
}
// Tipo Object: criamos um objeto
let cart;
cart = {
    key: 'senha',
    user: 'usuario'
};

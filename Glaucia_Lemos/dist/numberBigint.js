"use strict";
// ==> Exemplos: number
let num1 = 23.0; // Number
let num2 = 0x78CF; // Hexadecimal
let num3 = 0o577; // Octal
let num4 = 0b110001; // Binary
console.log('Number - Ponto Flutuante...: ', num1);
console.log('Number - Hexadecimal...: ', num2);
console.log('Number - Octal...: ', num3);
console.log('Number - Binário...: ', num4);
// ==> Exemplos: bigint
// Precisamos alterar no tsconfig o target ES6, ES7... para 'esnext'
let big1 = 9007199254740991n;
//binary
let big2 = 9007199254740995n;
// Hex
let big3 = 0x20000000000003n;
// Octal
let big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);

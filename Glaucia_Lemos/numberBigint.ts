// ==> Exemplos: number

let num1: number = 23.0;     // Number
let num2: number = 0x78CF;   // Hexadecimal
let num3: number = 0o577;    // Octal
let num4: number = 0b110001; // Binary

console.log('Number - Ponto Flutuante...: ', num1);
console.log('Number - Hexadecimal...: ', num2);
console.log('Number - Octal...: ', num3);
console.log('Number - Binário...: ', num4);


// ==> Exemplos: bigint
// Precisamos alterar no tsconfig o target ES6, ES7... para 'esnext'

let big1: bigint = 9007199254740991n;

//binary
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;

// Hex
let big3: bigint = 0x20000000000003n;

// Octal
let big4: bigint = 0o400000000000000003n;

console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
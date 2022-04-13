// Tipos de variaveis no TypeScript

// Tipo boolean
let isOpen: boolean
isOpen = true
console.log(isOpen)

// Tipo String: ('foo', "foo", `foo`)
let message1, message2, message3: string

message1 =  'Wanderson'
message2 = "Almeida"
message3 = `${message1} ${message2} Timóteo`

console.log(message3)

// Tipo number: funciona para int, floalt, hexadecimal ou binario
let num1, num2, hexadecimal: number

num1 = 20
num2 = 41.3
hexadecimal = 0xff0
console.log(`Número 1: ${num1}, Número 2: ${num2}, Hexadecimal: ${hexadecimal}`)

// Tipo array:  (precisamos dizer o tipo e passar o array, exemplo type[])
// boolean[], string[], number[]
let arrayNum: number[]
arrayNum = [1, 2, 3]

let arrayString: string[]
arrayString = ['Wanderson', "Timóteo"]

// Tipo Array<> com notação Generic
let arrayGeneric : Array<number>
arrayGeneric = [1, 2, 3]

// Tipo tuple: é um array porém já sabenos seu tipo e o numero de elementos dentro dele
let tupla : [number, string]
tupla = [2, 'Wanderson']

let newTupla : [number, string, string]
newTupla = [2, 'Wanderson', 'Timóteo']

// Tipo enum:  é um enumerador que serve para criar um conjunto de chave valor. 
// Ele é criado como se fosse um objeto, usado para definir nome para parametros complicados 
enum Colors {
  white = '#fff'
  black = '#000'
}

// Tipo any: é qualquer coisa, ou seja, podemos atribuir qualquer tipo, porém ele NÃO É LEGAL
let anyNum, anyArray, anyString : any
anyNum = 1
anyArray = [1, 2, 3]
anyString = 'Wanderson'

// Tipo void: é vazio, ele não retorna nada, usado em funções que não tem retorno.
function logger() : void {
  console.log('foo')
}

// Tipo Null | undefined : seus valores não são definidos, na pratica os dois são a mesma coisa 
// pois retorna false, ele é mais utilizado passando com type Alias
type Bla = String | undefined 

// Não faz sentido definir uma variavel como null, pois depois não poderemos mudar seu valor
let variable : null 


// Tipo never : definimos que numca terá um retorno
function error() : never {
  throw new Error("error");
}

// Tipo Object: criamos um objeto
let cart: object
cart = {
  key : 'senha',
  user: 'usuario'
}

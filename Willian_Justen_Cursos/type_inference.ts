// O TypeScrip é inteligente, ele consegue entender varios tipos e faz sua inferencia sem 
//  precisar que fazamos sua tipagem
// Normalmente declaramos uma variavel e depois definimos o seu tipo, por exemplo:

/**
 * VARIAVEL  **  TIPO
***********************
 let message  : string
************************ 
 let numero   : number
************************
 let booleano : boolean
************************* 
 */
   

// Após declarar a variavel e definir seu tipo, atribuimos seu valor correspondente ao seu tipo

// message =  'Wanderson'
// numero = 30
// booleano = true 

// Inferencia de Tipo é quando atribuimos um valor a variavel sem precisar tipar.
// Neste caso já passomos uma string para a variavel message inferindo o seu tipo como string
let message = "mensagem definida"
let memsagem : string = "outra mensagem definida" // Fazendo assim ficaria redundante

// Outro exemplo, addEventListener não precisamos dizer que o evento é um MouseEvent (evento : MouseEvent),
//  pois o typescript é inteligente e já infere
window.addEventListener("click", (evento) => {
  console.log(evento.target);
});

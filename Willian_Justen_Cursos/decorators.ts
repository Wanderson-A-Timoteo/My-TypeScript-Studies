/*
  Os decorators apesar de serem muito utilizados são features experimental tanto no typescript quanto no ECMAScript, por isso eles não são lançados oficialmente nestas linguagens. Para podermos usa-los precisamos configurar no tsconfig.json  "experimentalDecorators": true,

  O decorator é uma função como qlqr outra função, a única diferença é que ela recebe alguns parametros por default baseado em qual tipo de decorator estamos trabalhando e ela retorna alguma coisa  
  
  O decorator vai trabalhar em cima destas partes anotadas para que possamos adicionar coisas novas, ele tbm estará vigiando essas marcações para que ele possa adicionar um elemento novo, fazer alguma validação entre outros. Ele poderá fazer diferentes funções em cima daquele que ele esta anotando.

  @Component
  @Selector
  @useState("dasdas")

  Class decorator => Temos um construtor 
  Property decorator
  Method decorator
  Parameter decorator
  Acessor decorator

*/

// Exemplo: Class decorator

// Decorator recebe um target e este será o constructor da nossa classe
// Factory 
function logger(prefix: string) {
  return (target) => { // target é o construtor da classe
    console.log(`${prefix} - ${target}`);
  };
}

// Class decorator pois estamos trabalhando em uma classe
@logger("awesome") // Anotação decorator passando um parametro
class Foo {}


function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion;
    }
  }
}

// decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API{}

console.log(new API());


//==================================================================================================//


// Exemplo: Property decorator

function minLenght(lenght: number) {
  return(target: any, key: string | symbol) => {
    console.log(target);
    console.log(key);
  } // Aqui target é o prototype da classe
}

class Movie{
  // Validação - se for menor que 5 letras - error
  @minLenght(5)
  title: string;

  constructor( t: string) {
    this.title = t;
  }
}

const movie = new Movie("Interstellar");
console.log(movie);


//===================================================================================================//

// Exemplo: Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // console.log(target)
    // console.log(key)
    // console.log(descriptor)
    const originalMethod = descriptor.value;

    descriptor.value = function ( ...args ) {
      console.log(`Esperando ${ms}...`);
      setTimeout( () => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g
  }
  // esperar um tempo e vai rodar o metodo(ms) como um delay
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const pessoinha = new Greeter("Pessoinha!")
pessoinha.greet();

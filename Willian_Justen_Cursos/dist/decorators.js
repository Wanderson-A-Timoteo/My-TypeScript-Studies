"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Exemplo: Class decorator
// Decorator recebe um target e este será o constructor da nossa classe
// Factory 
function logger(prefix) {
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}
// Class decorator pois estamos trabalhando em uma classe
let Foo = class Foo {
};
Foo = __decorate([
    logger("awesome") // Anotação decorator passando um parametro
], Foo);
function setAPIVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
// decorator - anotar a versão da API
let API = class API {
};
API = __decorate([
    setAPIVersion("1.0.0")
], API);
console.log(new API());
//==================================================================================================//
// Exemplo: Property decorator
function minLenght(lenght) {
    return (target, key) => {
        console.log(target);
        console.log(key);
    }; // Aqui target é o prototype da classe
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
__decorate([
    minLenght(5)
], Movie.prototype, "title", void 0);
const movie = new Movie("Interstellar");
console.log(movie);
//===================================================================================================//
// Exemplo: Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        // console.log(target)
        // console.log(key)
        // console.log(descriptor)
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Greeter {
    constructor(g) {
        this.greeting = g;
    }
    // esperar um tempo e vai rodar o metodo(ms) como um delay
    greet() {
        console.log(`Hello! ${this.greeting}`);
    }
}
__decorate([
    delay(1000)
], Greeter.prototype, "greet", null);
const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();

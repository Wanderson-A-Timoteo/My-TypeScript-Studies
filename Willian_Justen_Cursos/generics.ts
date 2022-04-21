// Declaração normal em Typescript
// function useState() {
//     let state: number | string // Permite receber um valor number ou string

//     function getState() {
//         return state;
//     }

//     function setState(newState: number | string) {
//         state = newState;
//     }

//     return { getState, setState };
// }

// const newState = useState();

// Permite 
// newState.setState(456);
// console.log(newState.getState());

// Permite alterar o valor 
// newState.setState("Wanderson"); // Queremos que dê erro
// console.log(newState.getState());



//===================================================================================================//



// Caso eu não queira deixar que seja alterado seu valor após definir, podemos criar um generics
// Generics <>, dentro de <> definimos o tipo que vamos trabalhar
// Generics é definidas por símbolos ou letras, por padrão são
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// function useState<S>() {
//     let state: S 

//     function getState() {
//         return state;
//     }

//     function setState(newState: S) {
//         state = newState;
//     }

//     return { getState, setState };
// }

// Define useState() do tipo generics <unknown> aceitando qlqr tipo e isso não é certo, pois ele é parecido com any, ou seja, ele aceita qlqr coisa, string, number boolean...
// Porém a partir do momento que definimos seu tipo ele não permite alterar seu tipo, se passarmos uma string ele sempre será uma string, não aceitando number, boolean ou outro tipo.
//const newState = useState();

// definimos o tipo como string na declaração do metodo lá em cima, logo não permite outros tipos
//const newState = useState();  


// newState.setState(456); // Deu erro pq, quando definimos string não é possível passar um number
// console.log(newState.getState());


// newState.setState("Wanderson"); 
// console.log(newState.getState());



//==================================================================================================//

// Outra forma de definirmos o tipo é por, criar um type e estender e definir seu tipo, como no exemplo abaixo:
type numOrStr = number | String;
// Definimos S estendendo o type numOrStr que pode receber uma string ou um number, logo em seguido definimos seu tipo como string.
function useState<S extends numOrStr = string>() {
    let state: S 

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}

//Generics foi definido <string> e não mais como unknown, pois definimos o tipo como string na declaração do metodo lá em cima, logo não permite outros tipos
const newState = useState();  


newState.setState(456); // Deu erro pq, quando definimos string não é possível passar um number
console.log(newState.getState());


newState.setState("Wanderson"); 
console.log(newState.getState());
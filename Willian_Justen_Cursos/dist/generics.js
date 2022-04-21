"use strict";
// Declaração normal em Typescript
// function useState() {
//     let state: number | string // Permite receber um valor number ou string
// Definimos S estendendo o type numOrStr que pode receber uma string ou um number, logo em seguido definimos seu tipo como string.
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
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

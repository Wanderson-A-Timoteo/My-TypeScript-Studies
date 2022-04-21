"use strict";
// type TODO = {
//     title: string;
//     description: string;
//     completed: boolean;
// }
const todo = {
    title: "Assistir Star Wars novamente",
    description: "Relembrar os detalhes",
    completed: false,
};
console.log(todo);
// deu erro, pq não podemos alterar seu valor acessando diretamente as propriedades de todo
//todo.completed = true; 
//console.log(todo)
// A forma correta de alterar seu valor é criando um novo objeto, conforme o exemplo abaixo:
// Partial => deixa todas as propriedades em TODO como opcionais, como se colocassemos um ponto de enterrogação ao final da propriedade para definir que poderemos ou não atribuir um valor a ela.
function updateTodo(todo, fieldsToUpdates) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdates);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
console.log(todo3);
const todo4 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
console.log(todo4);
// Quando devemos usar Pick ou Omit? Exemplo de objeto com 5 propriedades
// Quando precisamos pegar varias propriedades de um objeto, neste caso de 5 propriedades eu quero pegar 4, então é melhor usar o Omit, pois vamos omitir apenas uma propriedade.
// Quando precisamos pegar poucas propriedades de um objeto, neste caso de 5 propriedades eu quero pegar 2, então é melhor usar o Pick e declarar as duas propriedades que precisamos.

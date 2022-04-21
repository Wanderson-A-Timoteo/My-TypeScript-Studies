// type TODO = {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// const todo: TODO = {
//     title: "Assistir Star Wars novamente",
//     description: "Relembrar os detalhes",
//     completed: false,
// }

// console.log(todo)

// // Apesar de conseguirmos alterar o seu valor acessando sua propriedade conforme exemplo abaixo, isso não é correto
// todo.completed = true;
// console.log(todo)




//====================================================================================================//



// O ideal seria criar um novo objeto apartir de "todo", trabalhando assim com o principio da imutabilidade, onde não mudamos o objeto criado no inicio "TODO".
// Para não permitir que isso todo.completed = true, ocorra podemos definir nosso objeto como  Readonly, ou seja, apenas como leitura, conforme exemplo abaixo:


type TODO = {
    title: string;
    description: string;
    completed: boolean;
}

const todo: Readonly<TODO> = {
    title: "Assistir Star Wars novamente",
    description: "Relembrar os detalhes",
    completed: false,
}

console.log(todo)

// deu erro, pq não podemos alterar seu valor acessando diretamente as propriedades de todo
//todo.completed = true; 
//console.log(todo)

// A forma correta de alterar seu valor é criando um novo objeto, conforme o exemplo abaixo:
// Partial => deixa todas as propriedades em TODO como opcionais, como se colocassemos um ponto de enterrogação ao final da propriedade para definir que poderemos ou não atribuir um valor a ela.
function updateTodo(todo: TODO, fieldsToUpdates: Partial<TODO>) { 

    return {...todo, ...fieldsToUpdates};
}

const todo2: TODO = updateTodo(todo, {completed: true});
console.log(todo2)

// Pick => Pega as propriedades que definirmos do objeto TODO, conforme exemplo abaixo:
// Neste caso TodoPreview será um objeto que herdará as propriedades title e completed de TODO
type TodoPreview = Pick<TODO, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}
console.log(todo3)

// Omit é o inverso de Pick
// Omit é usado quando queremos omitir uma propriedade, conforme exemplo abaixo:
type TodoPreview2 = Omit<TODO, "description">

const todo4: TodoPreview2 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}
console.log(todo4)

// Quando devemos usar Pick ou Omit? Exemplo de objeto com 5 propriedades
// Quando precisamos pegar varias propriedades de um objeto, neste caso de 5 propriedades eu quero pegar 4, então é melhor usar o Omit, pois vamos omitir apenas uma propriedade.

// Quando precisamos pegar poucas propriedades de um objeto, neste caso de 5 propriedades eu quero pegar 2, então é melhor usar o Pick e declarar as duas propriedades que precisamos.


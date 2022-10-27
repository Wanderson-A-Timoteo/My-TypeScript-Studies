// ==> Exemplo 01 - funções:
function logError(errorMessage) {
    console.log(errorMessage);
    // return errorMessage;
}
logError('Required field - Name!');
// ==> Exemplo 02 - funções:
const logErrorExample2 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample2('Required field - Surname');
// ==> Exemplo void: variáveis
let variavelExemploVoid;
// variavelExemploVoid = 1;
variavelExemploVoid = null; // Sem erro se habilitar como false em tsconfi 'strict'
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);

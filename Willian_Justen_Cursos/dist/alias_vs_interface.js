"use strict";
// Type Alias vs Interface
// Inplements
class AliasCreateGame {
}
// se passar 2 ele funciona normalmente, mas se passar 3 ele avisa que declaramos apenas 2 e da erro
[1, 2, 3];
// Implements 
class IntCreateGame {
}
// não conseguimos, pois ela aceita qualquer coisa, conforme exemplo abaixo
[1, 2, 3, "ssas"];
// Na interface, conseguimos mergiar ou uniar os dois escopos
const $ = {
    AInterface: "Wanderson",
    BInterface: "Timóteo",
};
// Vantagem da interface: Quando estamos criando libs, a Interfece é melhor, porque são extensíveis!
// Também é indicado quando criamos objetos/classes, ou seja, quando estamos trabalhando com POO

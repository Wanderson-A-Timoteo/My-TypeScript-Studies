"use strict";
class UserAccount {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
// Nova classe que extende a UserAccount
class CharAccount extends UserAccount {
    constructor(name, age, address, nickname, level) {
        super(name, age, address);
        this.nickname = nickname;
        this.level = level;
    }
    // Metodo GET
    get getLevel() {
        console.log('-----------GET---------------');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    // Dentro da classe temos acesso a level
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}
const Wand = new UserAccount("Wanderson", 38, "Rua La Paz");
console.log(Wand);
console.log(Wand.age);
Wand.logDetails();
const Ryan = new CharAccount("Ryan", 9, "RyanMaster", "Rua das Perolas", 100);
Ryan.logDetails();
// Podemos modificar o valor das propriedades
Ryan.nickname = "WandPlayer"; // Modificando o nickname de RyanMaster para WandPlayer
// Podemos definir para não deixar modificar o valor da propriedade declarando a variavel com private
//Ryan.level = 80; // Não conseguimos alterar, pois ela só esta visivel dentro da classe CharAccount 
console.log(Ryan);
Ryan.logDetails();
// Chamando o setLevel
Ryan.setLevel = 120; // Alterando o level 
// Chamando o getLevel
console.log(Ryan.getLevel);
// Classes abstratas é como classes modelo, não podemos criar objetos dentro dela, mas podemos extender
//  essa classe e nas classes que herdam dela poderemos criar os objetos 

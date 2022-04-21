// Type Alias vs Interface

// Definição de Type Alias
type AliasGame = {
    Atitle: string
}

type AliasDLC = {
    Aextra: string
}

// intersection
type AliasGameCollection = IGame & AliasDLC;

// Inplements
class AliasCreateGame implements AliasGameCollection{}

// Declarar função

type getSimilarsAlias = (Atitle: string) => void;

//================== Diferenças para interface ========================//

// permite declara tipos primitivos
type ID_Alias = string | number;

// Pode declarar tuplas normalmente
type Tuple_Alias = [number, number];
// se passar 2 ele funciona normalmente, mas se passar 3 ele avisa que declaramos apenas 2 e da erro
[1, 2, 3] as Tuple_Alias;

// Apenas uma declaração por escopo
type JQueryAlias = { AAlias: string};

// Se criamos um JQueryAlias, não permite criar outro JQueryAlias com novo valor ou que ele seja estendido
type JQueryAlias = { BAlias: string};

// É recomendado na maioria das vezes



//======================================================================================================//
// Interfaces

// definição
interface IGame {
    Ititle: string
}

interface IntDLC {
    Iextra: string
}

// Intersection | extend
interface IntGameColletion extends IGame, IntDLC {}

// Implements 
class IntCreateGame implements IntGameColletion {}

// Declarar função
interface getSimilarsInterface {
    (Ititle: string) : void;
}

//=================== Diferenças ======================//
interface ID_Interface extends number {}

// NÃO conseguimos definir Tuplas na interface
interface Tuple_interface {
    0: number;
    1: number;
}

// não conseguimos, pois ela aceita qualquer coisa, conforme exemplo abaixo
[1, 2, 3, "ssas"] as Tuple_interface;

// Pode ter múltiplas declarações com o mesmo escopo e ele une de mesmo nome
interface JQueryInterface {
    AInterface: string;
}

interface JQueryInterface {
    BInterface: string;
}

// Na interface, conseguimos mergiar ou uniar os dois escopos
const $: JQueryInterface = {
    AInterface: "Wanderson",
    BInterface: "Timóteo",
}
// Vantagem da interface: Quando estamos criando libs, a Interfece é melhor, porque são extensíveis!
// Também é indicado quando criamos objetos/classes, ou seja, quando estamos trabalhando com POO





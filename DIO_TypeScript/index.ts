// types
// interfaces

interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    executarRugido(alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre'
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

animal.executarRugido('s')
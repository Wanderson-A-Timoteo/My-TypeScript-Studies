// Generic types

function adicionaApendiceALista<T>(array: any[], valor: T) {
    return array.map(() => valor)
}

adicionaApendiceALista([1, 2, 3], 'd')

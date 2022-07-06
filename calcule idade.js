function calculaIdade( anos ) {
    return `Daqui a ${anos} anos, ${this.name} terá ${
        this.idade + anos
    } anos de idade.`
}

const pessoal = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
}

console.log(calculaIdade.call(pessoa2, 30));
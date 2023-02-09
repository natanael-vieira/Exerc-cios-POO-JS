'use strict';

class Laboratorio {
    #nome;
    #capacidade;
    constructor (nome, capacidade) {
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    getNome(nome) {
        return this.#nome;
    }
    getCapacidade(capacidade) {
        return this.#capacidade;
    }
    setNome(nome) {
        this.#nome = nome;
    }
    setCapacidade(capacidade) {
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio('Informática', 37);
console.log(lab.getCapacidade())
lab.nome = 'Computação;'
console.log(lab.nome) // Só vai aparecer no console porque foi atribuído um valor logo acima, mas que fora isso, como o atributo está privado ele não foi alterado.

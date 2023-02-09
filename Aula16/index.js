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
console.log(lab.nome) // Só vai aparecer no console porque foi atribuído um valor logo acima, mas que fora isso, como o atributo está privado ele não foi alterado. Neste caso para alterar o atributo nome eu precisaria incluir a palavra reservada set
console.log(lab);

const lab2 = new Laboratorio ('Meu Lab', 71);
console.log(lab2);
lab2.setNome('Mudando Nome');
console.log(lab2);
lab2.setCapacidade(91);
console.log(lab2)
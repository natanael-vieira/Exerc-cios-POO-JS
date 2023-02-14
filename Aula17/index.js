'use strict';

class Produto {
    #tipo;
    #valor;
    constructor(tipo, valor) {
        this.#validaValor(valor);
        this.#tipo = tipo;
        this.#valor = valor;
    }
    #validaValor(valor) {
        if(typeof(valor) !== 'number') {
            console.log('Valor inválido!');
        }
    }
    getDados() {
        return `
        Tipo: ${this.#tipo} 
        Valor: R$ ${this.#valor}`;
    }
    setValor(valor) {
        this.#valor = valor;
    }
}

class Livro extends Produto {
    #titulo;
    #numPag;
    constructor(titulo, numPag, valor) {
        super('Livro', valor);
        this.#titulo = titulo;
        this.#numPag = numPag;
    }
    getDados() {
        return `
        ${super.getDados()} 
        Título: ${this.#titulo}
        Número de Páginas: ${this.#numPag}`;
    }
}

const x = new Livro('Genérico',122, 33);
//x.setValor(47);
console.log(x.getDados());

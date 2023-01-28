'use strict'


class Produto {
    codigo;
    titulo;
    valor;
    constructor (codigo, titulo, valor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
    }
}

class Disciplina {
    codigo;
    nome;
    nota;
    constructor(codigo, nome, nota) {
        this.codigo = codigo;
        this.nome = nome;
        this.nota = nota;
    }
}

const d1 = new Disciplina(123, 'Matemática', 8);
console.log(d1);

const d2 = d1;
console.log(d2);

d2.codigo = 444;
d2.nome = 'Álgebra';
d2.nota = 9;

console.log(d1)

/*Objetos são armazenados em memória diferente de variáveis, pois as variáveis
são armazenadas em um local da memória, já os objetos tem uma referência, neste
caso se eu fizer uma atribuição de uma variávei para outra e depois fizer uma 
alteração nesta nova variável, a anterior não sofrerá a atualização da variável
que teve o resultado alterado na nova variável. Já no caso dos objetos, como ele 
um link de referência, se eu fizer qualquer alteração no novo objeto ele vai 
aplicar esta alteração para o primeiro objeto também, porque ele usa apenas a
referência do objeto e não um novo espaço na memória com uma cópia do objeto 
anterior como é feito com as variáveis.*/
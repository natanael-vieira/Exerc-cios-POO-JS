'use strict'


class Musica {
    static formato = 'mp3';
    #titulo; // Sempre que tiver um # na frente da propriedade ele define que esta propriedade está privada
    #duracao;
    constructor(titulo, duracao) {
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
}

const musica1 = new Musica('Minha musica', 190);
console.log(musica1.formato);
console.log(Musica.formato);

//###################################################
class Produto {
    static GRANDE = 10;
    static MEDIO = 5;
    static MEDIO = 1;
    codigo;
    titulo;
    valor;
    constructor (codigo, titulo, valor, tamanho) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

class Veiculo {
    tamanho;
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

const p1 = new Produto(337, "Meu Produto", 54, Produto.GRANDE);
const p2 = new Produto(777, "Meu Produto", 78, Produto.MEDIO);
console.log(p1); 
console.log(p2);

const v = new Veiculo(Produto.GRANDE); /* Posso usar um static em qualquer lugar 
desde que eu consiga ter acesso ao código ou declaração da classe do produto, 
ela vai funcionar como uma constante que pode ser utilizada em diferentes locais */
console.log(v)



/* Neste caso eu deveria utilizar a classe e não o 
produto que foi criado para acessar as informações ocultas. Podemos considerar
ela como uma constante, que não será mudada, pois neste caso de classes não tenho
como criar uma variável let ou const dentro do escopo da classe.*/ 
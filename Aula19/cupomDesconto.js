export class CupomDesconto {
    #desconto1 = 10;
    #desconto2 = 20;
    constructor() { }
    getDesconto(gastos) {
        if(gastos >= 5000 && gastos <= 10000) {
            console.log(`Você tem direito a ${this.#desconto1}% de desconto`);
        } else if (gastos > 10000) {
            console.log(`Você tem direito a ${this.#desconto2}% de desconto`)
        } else {
            console.log('Infelizmente você não possui descontos no momento.')
        }
    }
}
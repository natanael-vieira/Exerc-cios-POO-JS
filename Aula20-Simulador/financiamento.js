import { Parcela } from "./parcela";

export class Financiamento {
    #taxaJuros; //juros mensais
    #prazo; //em meses
    #parcelas = [];
}
//Importar a classe de carro
//criar uma nova classe de locadora extendendo carro para um terceiro arquivo consumir
//O novo import armazenará as placas dos carros da locadora.
//classe abastecer Carro passando a placa e qde de combustivel como parametro.
//consultar carros
//funcao para add carro

import * as Carro from "./exercicio01-export.mjs";
// ou import { Carro } from './exercicio01-export.mjs';
{
    let carro1 = new Carro.Carro('Honda',100);
    console.log(carro1);

    carro1.getModelo();
    carro1.setQdeAtualCombustivel(10);
    carro1.getQdeAtualCombustivel();
    carro1.setQdeAtualCombustivel(10);
    carro1.getQdeAtualCombustivel();
    carro1.setQdeAtualCombustivel(150);
    carro1.getQdeAtualCombustivel();
}

export class CarroComPlaca extends Carro.Carro { // se fosse um importe " import { Carro } from " seria eomente "extends Carro"
    #placa
    constructor(nomeDoCarro,tanqueDocarro,placaDoCarro){
        super(nomeDoCarro,tanqueDocarro);
        this.#placa = placaDoCarro;
    };

    get placaDoCarro(){
        return this.#placa;
    }
}

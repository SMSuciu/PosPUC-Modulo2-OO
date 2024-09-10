//Criar uma classe de carro que seja em modulo.
//variaveis de valor que tenho do tanque e capacidade do tanque.
//Construir get do valor do tanque atual e do valor maximo do tanque ( capacidade)
//Construir um set que valida a atribuicao de combustivel no tanque. Lembrado da capacidade dele.
//importarem um outro arquivo de import com a manipulacao do obj.
//ler os valores dos atributos e tentar alterar os valores.

import { CarroComPlaca } from "./exercicio01-import.mjs";
//ou import * as CarroComPlaca from "./exercicio01-import.mjs";

class Locadora {
    #listaDeCarros
    constructor(){
        this.#listaDeCarros = [];
    }

    consultaListaDeCarros(){ // Pq com o get nao funciona?
        this.#listaDeCarros.forEach((carro) => {
            console.log('Modelo :' +carro.getModelo());
            console.log('Placa :' +carro.placaDoCarro);
            console.log ('Tanque de combustivel : ' +carro.getQdeAtualCombustivel());
        });
    }

    adicionarCarro(carroNovo){
        this.#listaDeCarros.push(carroNovo);
        console.log(this.#listaDeCarros.length);
    }
}

console.log('------------- Exercicio 2 - Locadora -------------------------')

let locadora1 = new Locadora();
let novoscarros1 = new CarroComPlaca('Fusca',100,'KXP4343');
//locadora1.adicionarCarro(new CarroComPlaca('Fusca',100,'KXP4343'));
locadora1.adicionarCarro(novoscarros1);
novoscarros1.setQdeAtualCombustivel(43);
locadora1.consultaListaDeCarros();
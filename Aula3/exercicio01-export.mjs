//Criar uma classe de carro que seja em modulo.
//variaveis de valor que tenho do tanque e capacidade do tanque.
//Construir get do valor do tanque atual e do valor maximo do tanque ( capacidade)
//Construir um set que valida a atribuicao de combustivel no tanque. Lembrado da capacidade dele.
//importarem um outro arquivo de import com a manipulacao do obj.
//ler os valores dos atributos e tentar alterar os valores.

export class Carro{
    #modelo;
    #capacidadeTanque;
    #qdeAtualCombustivel = 0;
    constructor(modelo,capacidadeTanque){
        this.#modelo = modelo;
        this.#capacidadeTanque = capacidadeTanque;
     };

     getModelo(){
        //console.log(this.#modelo);
        return this.#modelo
     }

     getQdeAtualCombustivel(){
        //console.log(this.#qdeAtualCombustivel);
        return this.#qdeAtualCombustivel;
     }

     setQdeAtualCombustivel(qtdCombustivel){
        if (  this.#qdeAtualCombustivel + qtdCombustivel > this.#capacidadeTanque){
            this.#qdeAtualCombustivel = this.#capacidadeTanque;
            //console.log('A capacidade total do tanque será extrapolada, entao o tanque terá o limite possivel.');
        } else {
            this.#qdeAtualCombustivel += qtdCombustivel;
        };
     }
};
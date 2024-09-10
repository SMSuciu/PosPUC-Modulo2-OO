//Construtores
function Pessoa(nome , anoNascimento){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.calculaIdade = function() {
           return new Date().getFullYear() - this.anoNascimento;
    };
    this.idade = this.calculaIdade();
}

const pessoa = new Pessoa('Manu',2015);
console.log(pessoa.nome);
console.log(pessoa.anoNascimento);
console.log(pessoa.idade);

const pessoa2 = new Pessoa('Foguinho',2012);
console.log(pessoa2.nome);
console.log(pessoa2.anoNascimento);
console.log(pessoa2.idade);

//----------------------------------//
//Parte2
//Todos sao filhos de Object pela herança. Pode inclusive criar um objeto do tipo Objeto. 
console.log('---------------PARTE 2-------------------');
console.log('pessoa.valueOf()');
console.log(pessoa.valueOf());
console.log('Object.getPrototypeOf');
console.log(Object.getPrototypeOf(pessoa2));

const pessoa3 = Object.create(pessoa2); //Criando um novo objeto baseado no pessoa2

//Incluindo uma funcao no construtor origem, fazendo com que por herança, todos os filhos ja criados tenham a função
Pessoa.prototype.saudar = function(){ console.log('Olá!')};
pessoa2.saudar();

console.log('        ');
//Classes
console.log('----------Classes----------');
console.log('        ');
class Animal{
    constructor(tipoDoAnimal,nomeDoAnimal){
        this.tipoDoAnimal = tipoDoAnimal;
        this.nomeDoAnimal = nomeDoAnimal;
    }
    #oquecome; //variavel privada deve levar o simbolo 
    alimento;
    locomover(tipoDoAnimal){
        if (tipoDoAnimal == 'Gato'){
            console.log('O '+ this.nomeDoAnimal +' anda');
        } else if (tipoDoAnimal == 'Peixe'){
            console.log('O '+ this.nomeDoAnimal +' nada');        
        } else {
            console.log('O '+ this.nomeDoAnimal +' Voa');
        };        
    }
    saudar(){
        console.log('Ola');
    }
    getOQueCome(){
        return this.#oquecome;
    }
    setOQueCome(valor){
       this.#oquecome = valor;
    }    
}


const animal1 = new Animal('Gato','Foguinho');
console.log(animal1.nomeDoAnimal);  
animal1.locomover(animal1.tipoDoAnimal);

//Herança
console.log('----------Herança----------');
class Mamifero extends Animal{ //export para modulo ES6
    constructor(tipoDoAnimal,nomeDoAnimal, qdeMembros){
        super(tipoDoAnimal,nomeDoAnimal); //Os parametros do pai
        this.qdeMembros = qdeMembros; //Parametos somente da classe
    }
    saudar(){
        super.saudar(); //função do pai
        console.log('Sou um '+this.tipoDoAnimal); //

    }
}
module.exports = Mamifero; //criando um exports commonJS

const animal2 = new Mamifero('Cachorro','Barty',4);
console.log(animal2);
animal2.locomover(animal2.tipoDoAnimal);

//----------------------------------//
//Parte3
//Polimorfismo - Sobrescrita
 animal2.saudar(); // Sobre escrita de metedo.

 Animal.prototype.possuiCalda = true; //adicionando um atributo no prototipo ( classe )

 console.log(Animal.prototype);
 console.log(animal1.possuiCalda);
 
 console.log('        ');
 console.log('----------Static----------');
 console.log('        ');

 class ValidadorCPF{
    static tamanhoCPF = 11;
    static validar(tamanho){
        if (tamanho == this.tamanhoCPF){
            console.log('true');
        } else 
        console.log('false');
    };    
 };

 ValidadorCPF.validar('123456'.length);
 ValidadorCPF.validar('12345678900'.length);

 console.log('        ');
 console.log('----------Visibilidade de Elementos----------');
 console.log('        ');
 //Publico - Privado (#) - Protegido
 function PessoaPrivada(){
    let nome = 'XXXXX';
    this.calculaIdade = function(){
        return 43;
    };
    
 };
 const pessoaPrivada = new PessoaPrivada();
console.log(pessoaPrivada);
console.log(pessoaPrivada.nome);
console.log(pessoaPrivada.calculaIdade());
console.log(animal1.getOQueCome());
animal1.setOQueCome('Carne!!');
console.log(animal1.getOQueCome());

console.log('        ');
console.log('----------Associação----------');
console.log('        ');

class Alimento{
   #alimentoPreferido;
   constructor(tipoAnimal,idadeAnimal){
    this.tipoAnimal = tipoAnimal;
    this.idadeAnimal = idadeAnimal;
   };

   getAlimento(){
    if (this.tipoAnimal != null){
        return this.#alimentoPreferido;
        } 
    else
       { 
        throw new Error();
       }
};

 setAlimentoPreferido(tipoAlimento){
    this.#alimentoPreferido = tipoAlimento;
 };
}

const animalComRelacionamento = new Mamifero('Gato','Foguinho',4);
animalComRelacionamento.alimento = new Alimento(animalComRelacionamento.tipoDoAnimal,8); //~O parametro da classe Animal é um obj Alimento
console.log(animalComRelacionamento);
animalComRelacionamento.alimento.setAlimentoPreferido('Pastinha');
console.log(animalComRelacionamento.alimento.getAlimento());




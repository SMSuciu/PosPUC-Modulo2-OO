//Modularização 
////Modulo ES6 - Para rodar no NodeJS usar a extenção mjs


  //trecho de arquivos de exportção
  export function area(r) {return Math.PI * r**2;}
  export function circunferencia (r) {return 2* Math.PI * r;}

  export function regraNumeroPrimo (item) {
    let numeroDiv = 0;
    for(let x = 1; x <= item; x++){
        if ((item%x)== 0 )
            numeroDiv++;

        if(numeroDiv==2)
            return true
         else 
            return false
    }
}

export function tabuada (x) {
    return function(y){
        return x * y;
    }
}

export class Animal{ //export para modulo ES6
    constructor(tipoDoAnimal,nomeDoAnimal){
        this.tipoDoAnimal = tipoDoAnimal;
        this.nomeDoAnimal = nomeDoAnimal;
    }
    saudar(){
        console.log('Sou um '+this.tipoDoAnimal); //

    }
}
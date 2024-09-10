//Modulo CommonJS 
const circulo = require('./aula3-exports.js');
console.log(`A área do círculo de raio 4 é ${circulo.area(4)}`);

//acessando a função diretamente.
const {area} = require('./aula3-exports.js');
console.log(`A área do círculo de raio 4 é ${area(4)}`);

//let tabuadade7 = circulo.tabuada(7);
//console.log('Tabuada:'+ circulo.tabuadade7tabuadade7(2));

{
    let animal = require('./aula2.js');
    let animalx = new animal();//('Gato','Foguinho',4);

    console.log(animalx);

}

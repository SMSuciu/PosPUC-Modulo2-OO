//Modularização 
////Modulo ES6 - Para rodar no NodeJS usar a extenção mjs

import {area, circunferencia as circ} from "./aula3-export.mjs";
console.log('Area - '+ circ(4));


import * as circulo from "./aula3-export.mjs";
console.log(`Area : ${circulo.area(4)}`);

import {Animal} from "./aula3-export.mjs";
const c1 = new Animal('Gato','Foguinho',4);
console.log(c1.nomeDoAnimal);

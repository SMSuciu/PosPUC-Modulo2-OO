//gabydepaulaaa 
//imheavenxo

console.log('Iteracao de arrays');
var a= [];
a[0] = 43;
a[1] = 'Bart';
a[7] = Math.random();
console.log(a + ' - '+ a.length); // o tamanho do array

console.log('-----------------------------');
console.log('for x in a');
for(let x in a){
    console.log('1 - Valor do vetor na posição '+ x + ' é : '+ a[x]);
}

console.log('-----------------------------');
console.log('for x of a');
for (let x of a){ //Chama uma iteração para cada obj. Interaguindo ocm o valor de cada item.
    console.log('2 - Valor do vetor na posição '+ x + ' é : '+ a[x]);
}
console.log('-----------------------------');
console.log('for condicional');
for (let x=0; x< a.length; x++){
    console.log('3 - Valor do vetor na posição '+ x + ' é : '+ a[x]);
}

console.log('-----------------------------');
console.log('Métodos - Array');

console.log('ToString ->  '+ a.toString());
console.log('join ->  '+ a.join('-'));


console.log('forEach ->  '); //para cada item do array executa a função passando como parametro o item do array
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tabuadaDe2(item) {
    console.log(item * 2);
}
numeros.forEach(tabuadaDe2);

console.log('-----------------------------');
console.log('Função como Parametro');
function decisao(pergunta,xok,xcancelar){
    if(pergunta =='OK') xok()
        else xcancelar();
}
function showOk(){
    console.log('Voce aceitou!');
}
function showCancelar(){
    console.log('Você cancelou!');
}

decisao("OK",showOk,showCancelar);
decisao("X",showOk,showCancelar);

console.log('            ');
console.log('Função anônima como argumento');
decisao('OK',
        function(){console.log('2 - Voce aceitou!')} , 
        function(){console.log('2 - Voce Cancelou!')});


console.log('            ');
console.log('Função associada a uma variável');

let beOk = function showOk2(){
    console.log('3 - Voce aceitou!');
};

let beCancelar = function showCancelar2(){
    console.log('3 - Voce Cancelou!');
};

decisao('OK',beOk,beCancelar);
decisao('XX',beOk,beCancelar);

console.log('            ');
console.log('  ---------------------------------------------------   ');
console.log('Função de fechameto(Closure)'); // Guarda o primeiro parametro e na segunda vez que chama, faz a funcao dentro da função.
function tabuada(x){
    return function(y){
        return x * y;
    };
}
let tabuadaDe7 = tabuada(7);
let tabuadaCompleta = [];
for ( i = 0 ; i <= 10 ; i++) {
    tabuadaCompleta[i] = tabuadaDe7(i);
};
console.log(tabuadaCompleta );

console.log('            ');
console.log('  ---------------------------------------------------   ');
console.log('Função de seta (arrow function)');

{
   let somar = () => console.log("Funcao sem parametro");
   somar();
}

{
   let somar = _ => console.log("Usando _");
   somar();
}

{
    let somar = (x,y) => x+y;
    console.log(somar(2,5));
}

{
    somar = (x,y) => {return x + y};
    console.log(somar(2,5));
}

{
    somar = (x,y) => x>y?x:y; // x>y?x:y;  é Se x>y entao x senao y
    console.log(somar(2,5));
}

console.log('            ');
console.log('  ---------------------------------------------------   ');
console.log('Função de alta ordem');
console.log('            ');

array = [1,2,3,4,5,6,7,8,9,0];
regraNumeroPrimo = (item) => {
    let numeroDiv = 0;
    for(let x = 1; x <= item; x++){
        if ((item%x)== 0 )
            numeroDiv++;

        if(numeroDiv==2)
            return true
         else return false
    }
}
console.log('every - Todos os numeros sao primos? '+ array.every(regraNumeroPrimo));

regraImpar = (item2) => item2%2 != 0;
console.log('Teste 2 - every - Todos os numeros sao impar? '+ array.every(regraImpar));
console.log('some - Ha algum numero primos? '+ array.some(regraNumeroPrimo));
console.log('filter - Quais sao os numeros impares? '+ array.filter(regraImpar));

console.log('filter - Quais sao os numeros impares? '+ array.filter(regraImpar)); 

//forEach - Interacao em cada um dos itens do array.
array.forEach((numero) => console.log(numero+"->"+(numero%2 == 0?"par":"impar")))

{//reduce
    let resultado = array.reduce((acc,val) => acc+=(val%2==0)? val:0, 0)
    console.log('reduce - A soma dos numero pares é: '+resultado)
}

{//map
    let novoArray = array.map((item) => item*2)
    console.log('map - A nova lista é: '+novoArray)
}
//Misturando as operaçoes
{
    console.log('     ');
    console.log('Filter + Map + forEach');
    array.filter(regraImpar).map((item =>item*2)).forEach((numero) => console.log(numero+"->"+(numero%2 == 0?"par":"impar")));
}


console.log('   ');
console.log('----------- JSON -------------'); 
let jsonTabuada = JSON.stringify(tabuadaCompleta);// Converte um objeto em string
console.log('stringify - Tabuada Completa '+ jsonTabuada);


class Celular{
     nome ='Xaomi'
     cor = 'proto'
};
let celular = new Celular;

let jsonClasse = JSON.stringify(celular);
console.log('stringify - Classe '+ jsonClasse);

console.log('   ');
parceClasse = JSON.parse(jsonClasse);// Converte o json em obj
console.log('Parse '+parceClasse.nome)

/*
console.log('   ');
console.log('----------- Exceção -------------'); 
class ValidaErro extends Error { //ideal sempre usar uma extrutura ja existente com oo "Error"
 constructor(msg) {
    super(msg);
    this.name = 'VadidacaoErro';
 }
}
function vaiDarErro() {
    throw new ValidaErro("Dados Inalidos.");
}

try{ // tente fazer
    vaiDarErro()
}
 catch(e){ // se der erro
    console.error('Err '+ e.name + ' - '+e.msg);
}
finally{ //Sempre será executado
    console.log('Processo finalizado');
}

console.log('   ');
console.log('----------- Função Assincrona - Callbacks -------------'); 
const fs = require('fs')
const onRead = function onRead (err, buf) {
if(err)
console.log("houve um erro")
else
console.log(buf.toString())
}
fs.readFile( '01a_textoQualquer.txt', onRead )

console.log('   ');
console.log('----------- Promise -------------'); 
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Successo!");
    }, 2000);
    });
    let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
    }
    myFirstPromise
    .then(ifSucceed);
    console.log("Fim do programa")

// Async/Await - Modelo sintático para facilitar o uso de objetos Promise
// async marca uma função ou método como sendo assíncrono
// await antes de uma expressão que fornece um objeto Promise faz com que o código espere até que a promise seja resol
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido"), 2000);
    });
    let resultado = await promise;
    return resultado;
    }

console.log("Iniciando o programa")
fazAlgo().then((msg) => console.log(msg)) // Executa tudo e depois retorna o pedido.
console.log("Finalizando o programa") 


async function main() {
console.log("Iniciando o programa")
console.log( await(fazAlgo()) ) //aguarda o termino da solicitacao
console.log("Finalizando o programa")
}
main()
*/
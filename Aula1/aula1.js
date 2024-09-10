var pessoa1 = {
    nome : 'Foguinho',
    idade : 8
}

let pessoa2 = {
    nome : 'Zoca',
    idade : 10
}
console.log(pessoa1);
console.log(pessoa2);

class pessoa{
    construtor(nome , anoDeNascimento){
        this.nome = nome,
        this.anoDeNascimento = anoDeNascimento
    }
    
    calcularIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }

    saudar(idioma , nomeDoAmigo){
        if (idioma == 'Portugues')
            console.log('Ola '+nomeDoAmigo)
        else if (idioma == 'Ingles')
            console.log('Hallo '+nomeDoAmigo)
        else
          console.log('Qual o seu idioma?') 
    }

}

let pessoa3 = new pessoa()
pessoa3.nome = 'Manu'
pessoa3.anoDeNascimento = 2015
console.log(pessoa3.nome)
pessoa3.idade = pessoa3.calcularIdade();
console.log(pessoa3['idade'])

pessoa3.saudar('Portugues', 'Zoca');
pessoa3.saudar('Ingles', 'Foguinho');
pessoa3.saudar('Alemao', 'Zulu');


console.log(pessoa3.idade)

//Fabrica de Objeto
function criarPessoaNova(nome,anoNascimento){
    return{
        //quando o nome de parametro é o mesmo da variavel, nao precisa do ":this.var"
        nome,
        anoNascimento,
        calculaIdadePessoaNova: function() {
            return new Date().getFullYear() - this.anoNascimento;
        }       
    };
};
const newPessoa = criarPessoaNova('Manu', 2015);
console.log(newPessoa)
var idadePessoa_nova = newPessoa.calculaIdadePessoaNova(newPessoa.anoNascimento)

console.log(idadePessoa_nova)
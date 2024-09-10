//Modularização 
//Modulo CommonJS - Padrão utilizado por grande nº de pacotes disponibilizados via NPN(Geranciamento de pacotes).
  //O NodeJS suporta o padrão CommonJs


  //trecho de arquivos de exportção
  exports.area =(r) => Math.PI * r**2;
  exports.circunferencia = (r) => 2* Math.pi * r;

  exports.regraNumeroPrimo = (item) => {
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

exports.tabuada = (x) => {
    return function(y){
        return x * y;
    }
}

// Funcion que crea funciones. 

function crearFuncSuma(monto){
    function suma(numero){
        return monto + numero;
    }

    return suma;
}


var sumaDos = crearFuncSuma(2);
var sumaCinco = crearFuncSuma(5);

console.assert( 5 === sumaDos(3) , '5 === SumaDos con 3 ');
console.assert( 10 === sumaCinco(5) , '10 === SumaCinco con 5' );
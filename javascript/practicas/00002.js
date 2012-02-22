

// Definiendo la función sum
function sum( a , b ){
    var c = a + b;
    return c;
}

// Retorna 3
console.log( sum(1,2) );

// Retorna NaN
console.log( sum(1) );

// Retorna 3 , no importan los otros parámetros.
console.log( sum(1,2,3,4,5) );
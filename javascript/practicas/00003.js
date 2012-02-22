

// Retorna el "objeto" arguments con todos los argumentos 
// pasados a la función; no es un arreglo.
function args(){
    return arguments;
}

// Convierte el objeto arguments en un arreglo. 
// Retorna el arreglo.
function argsArr(){
    var args = Array.prototype.slice.call(arguments);
    return args;
}

console.log( args() );
console.log( args( 1, 2, 3 ) ); 
console.log( argsArr() );
console.log( argsArr( 1, 2, 3 ) ); 
 

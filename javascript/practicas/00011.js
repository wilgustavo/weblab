// funciones Callback 

function llamar_sumar( a , b ) {
    return a() + b();
}

function uno(){
    return 1;
}

function dos(){
    return 2;
}

// Con nombre
console.assert( 3 === llamar_sumar( uno , dos )  , 'Funciones Callback');

// Anonima 
console.assert( 4 === llamar_sumar( function(){return 2; } , 
                                    function(){return 3; }
                ) , 'anonima Callback')
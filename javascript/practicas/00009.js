

// Funciones anónimas pueden tener nombre, pero solo esta visible dentro de la función.
// Ver secrets of javascript ninja pag- 10

var assert = require('assert');

var afuera = function adentro(){
    assert( afuera == adentro, "esta función se define dos veces a la vez");
}

afuera();

assert( typeof adentro === 'undefined' , 
    "Pero adentro() no está definida afuera de la función");
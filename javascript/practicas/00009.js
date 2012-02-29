

// Funciones anónimas pueden tener nombre, pero solo esta visible dentro de la función.
// Ver secrets of javascript ninja pag- 10

var afuera = function adentro(){
    console.assert( afuera == adentro, "esta función se define dos veces a la vez");
}

afuera();

console.assert( typeof adentro === 'undefined' , 
    "Pero adentro() no está definida afuera de la función");
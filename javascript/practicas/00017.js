(function(){
    var local = "Esto es local, gracias a var";

    noLocal = function(){ // NOTA: no hay var
        // una función "exportada" que puede ver la variable local.
        return local;
    }
})();

console.assert( 'undefined' === typeof local , "no se puede acceder a local");
console.assert( 'function' === typeof noLocal , "se puede acceder a noLocal");
console.assert( 'Esto es local, gracias a var' === noLocal() , 
    "Se puede acceder al resultado de noLocal" );
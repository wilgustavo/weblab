
// Ver Secrets of the javascript Ninja pag. 8

var assert = require('assert');

function pruebaInvisible(){
    var ret = invisible() == invisible();
    assert( ret, "Nunca se leerá debajo de esta línea, pero se verá igual!" );
    assert( typeof invisible !== "undefined" , 'Aunque no se vea esta definida');
    return true; 
    function invisible() { return true; }
}
    
pruebaInvisible();

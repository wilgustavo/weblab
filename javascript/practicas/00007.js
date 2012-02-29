
// Ver Secrets of the javascript Ninja pag. 8

function pruebaInvisible(){
    var ret = invisible() == invisible();
    console.assert( ret, "Nunca se leerá debajo de esta línea, pero se verá igual!" );
    console.assert( typeof invisible !== "undefined" , 'Aunque no se vea esta definida');
    return true; 
    function invisible() { return true; }
}
    
pruebaInvisible();

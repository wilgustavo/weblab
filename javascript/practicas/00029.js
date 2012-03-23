// Creating objects 
// Similar at the ECMAScript 5 function Object.create()
function inherit(p){
    if ( typeof p !== 'object' && typeof p !== 'function' ) { 
        throw TypeError() ;
    }
    function f() {};
    f.prototype = p;
    return new f();
}

var original = {
    x: 50 , 
    y: 102 
};

var copia = inherit(original);

console.assert( undefined !== copia.x , 'Copiado atributo x' );
console.assert( original.x ===  copia.x , 'Copiado atributo x' );

console.assert( undefined !== copia.y , 'Copiado atributo y' );
console.assert( original.y ===  copia.y , 'Copiado atributo y' );

original.x = 75;
console.assert( 75 === original.x , 'Cambiando atributo del original');
console.assert( original.x ===  copia.x , 'Cambia tambien la copia' );

original.z = 315;
console.assert( 315 === original.z , 'Agregando atributo al original');
console.assert( undefined !== copia.z , 'Tambien se agrega a la copia' );
console.assert( original.z ===  copia.z , 'Tienen el mismo valor' );

copia.y = 199;
console.assert( 199 === copia.y , 'Cambiando atributo de la copia');
console.assert( original.y !== copia.y , 'El cambio no afecta al original' );
console.assert( 102 === original.y , 'El cambio no afecta al original' );

original.y = 114;
console.assert( 114 === original.y , 'Cambiando atributo del original');
console.assert( original.y !== copia.y , 
    'El cambio no afecta al la copia que habia cambiado' );
console.assert( 199 === copia.y , 'No lo cambia porque ya se ha cambiado');





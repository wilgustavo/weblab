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

var recObj = {
    x: 50 , 
    y: 102 
};

var otrObj = inherit(recObj);

console.assert( undefined !== otrObj.x , 'Copiado atributo x' );
console.assert( recObj.x ===  otrObj.x , 'Copiado atributo x' );

console.assert( undefined !== otrObj.y , 'Copiado atributo y' );
console.assert( recObj.y ===  otrObj.y , 'Copiado atributo y' );

console.assert( recObj !== otrObj , 'No es el mismo objeto');

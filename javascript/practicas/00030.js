// Enumerando propiedades.
var obj = {
    x: 1 ,
    y: 2
};

console.assert( 'x' in obj , 'x está definido en obj' );
console.assert( 'y' in obj , 'y está definido en obj' );
console.assert( 'toString' in obj , 'toString esta definido en obj' );
console.assert( typeof obj['toString'] === 'function' , 'toString es un metodo de obj' );
console.assert( obj.hasOwnProperty('x') , 'x es atributo propio de obj' );
console.assert( !obj.hasOwnProperty('toString') , 'toString no es propio de obj' );

// 
var pais = {
    nombre: 'Uzbekistan' , 
    capital: 'Taskent' , 
    superficie: 447400 , 
    poblacion: 25563441 , 
    moneda: 'Sum Uzbeko'
};

// Redefinir funcion implementada en 00027.js 
// para quitar artibutos no propios y metodos. 
var getKeys = function(obj){
    var keys = [];
    for( var key in obj ) {
        if( !obj.hasOwnProperty(key) ) continue;
        if( typeof obj[key] === "function") continue; 
        keys.push(key);
    }
    return keys;
}

console.log(getKeys(pais));

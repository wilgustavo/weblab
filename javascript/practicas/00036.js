// Definiendo propiedades
// SOLO para ECMAScript 5
var obj = {};

// Agregar propiedad 
Object.defineProperty( obj , 'x' , {
    value: 10 ,
    writable: true ,
    enumerable: false ,
    configurable: true 
});

console.assert( 10 === obj.x  , 'Recuperar valor de obj.x' );
console.assert( -1 === Object.keys(obj).indexOf('x') , 'No es enumerable');

// cambiar atributo enumerable
Object.defineProperty( obj , 'x' , { enumerable: true });
console.assert( -1 !== Object.keys(obj).indexOf('x') , 'Ahora es enumerable');

// cambiar atributo writable
Object.defineProperty( obj , 'x' , { writable: false });
obj.x = 20; // Falla en modo silencioso , no cambia el valor.
console.assert( 10 === obj.x  , 'No cambió el valor de obj.x' );

// Sim embargo podemos cambiar el valor por este medio:
Object.defineProperty( obj , 'x' , { value: 50 });
console.assert( 50 === obj.x  , 'Cambió el valor de obj.x' );

// Cambiamos x para agregarle un metodo get y siembre nos de 0.
Object.defineProperty( obj , 'x' , { get: function(){ return 0; } });
obj.x = 787741;
console.assert( 0 === obj.x , 'Ahora no importa el valor siempre nos retorna 0' );


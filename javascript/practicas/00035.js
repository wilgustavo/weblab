// Consultar los atributos de las propiedades o propiedades de los atributos.
// SOLO para ECMAScript 5
var obj = {
    x:1 , 
    set next() {
        x++
    }
};

// Obtener los atributos de la propiedad x del objeto obj.
// retorna { value: 1, writable: true, enumerable: true, configurable: true }
// value: retorna el valor 
// writable: retorna true si se puede cambiar el valor. 
// get y set 
// configurable: retorna true si se puede cambiar el descriptor de propiedades. 
//               Además si es true se puede borrar con delete. 
// enumerable: se incluye en la lista del for...in
attr1 = Object.getOwnPropertyDescriptor( obj , 'x' );
console.assert( 1 === attr1.value , 'value' );
console.assert( true === attr1.writable , 'writable' );
console.assert( true === attr1.enumerable , 'enumerable' );
console.assert( true === attr1.configurable , 'configurable' );

// Obtener los atributos del metodo set next.
attr2 = Object.getOwnPropertyDescriptor( obj, 'next' );
console.assert( undefined === attr2.get , 'no es un metodo get' );
console.assert( undefined !== attr2.set , 'es un metodo set' );
console.assert( 'function' === typeof attr2.set , 'es una funcion' );
console.assert( 'next' === attr2.set.name, 'la funcion set se llama next' );
console.assert( true === attr2.enumerable , 'enumerable' );
console.assert( true === attr2.configurable , 'configurable' );

// No te muestra los atributos de propiedades heredadas.
attr3 = Object.getOwnPropertyDescriptor( obj , 'toString' );
console.assert( undefined === attr3 , 'Solo trabaja con las propiedades propias' );
console.assert( 'function' === typeof obj['toString'] , 'Pero existe.');

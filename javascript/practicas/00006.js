

// Si declaro suma con 'var' no puedo eliminarla con 'delete'
suma = function( a , b ){
	return a + b;
}

var add = suma;
delete suma;


// Retorna 'undefined' porque se borro.
console.log( typeof suma );

// Retorna 'function' ( una copia de suma )
console.log( typeof add );

// Retorna 3
console.log( add( 1 , 2 ) );
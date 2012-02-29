
// No importa donde se defina una función con nombre. 
// Pero hay que tener cuidado donde se define una anonima , que no puede hacerse
// uso hasta que la línea de ejecución pase por ella.
// Ver Secrets of the javascript Ninja pag. 8

console.assert( typeof conNombre === 'function' , 'Se puede definir en cualquier lado' );
console.assert( typeof anonima === 'undefined' , 'Todavía no se puede usar' );

function conNombre() { return true; };
anonima = function(){ return true; };

console.assert( typeof anonima === 'function' , 'Ahora se puede usar' );

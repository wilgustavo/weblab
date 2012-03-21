
// Igualdad de objetos.
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.assert(object1 == object2 , 'comparar object1 y object2');
console.assert(object1 !== object3 , 'comparar object1 y object3');

object1.value = 15;
console.assert( 15 === object2.value , 'cambiar atributos');

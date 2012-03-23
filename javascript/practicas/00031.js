// Copiar las propiedades de p en o. 
// Si o y p tienen la misma propiedad, la propiedad de o se sobreescribe. 
function extend(o, p){
    for( prop in p){
        o[prop] = p[prop];
    }
    return o;
}

var figura = {
    forma: 'circulo' , 
    color: 'blanco'
}

var pintura = {
    borde: 'negro' , 
    color: 'negro'
};

extend( pintura , figura );

console.assert( 'forma' in pintura , 'forma está definido en pintura' );
console.assert( 'blanco' === pintura.color , 'color se sobreescribe en pintura' );

var cuadro = extend({} , pintura); //Crear un nuevo objeto con propiedades de pintura.
console.assert( 'borde' in cuadro , 'borde está definido en cuadro' );
console.assert( 'color' in cuadro , 'color está definido en cuadro' );


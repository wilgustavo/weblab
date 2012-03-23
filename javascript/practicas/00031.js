// Copiar las propiedades de p en o. 
// Si o y p tienen la misma propiedad, la propiedad de o se sobreescribe. 
function extend(o, p){
    for( prop in p){
        o[prop] = p[prop];
    }
}

var figura = {
    forma: 'circulo' , 
    color: 'blanco'
}

var pintura = {
    borde: 'negro'
};

extend( pintura , figura );

console.assert( 'forma' in pintura , 'forma está definido en pintura' );
console.assert( 'color' in pintura , 'color está definido en pintura' );


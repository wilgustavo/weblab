// Copia propiedades de otro objeto , 
// pero no sobreescribe las que ya existen.
function merge(o , p){
    for( prop in p) {
        if ( o.hasOwnProperty(prop)) continue;
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

merge( pintura , figura );

console.assert( 'forma' in pintura , 'forma está definido en pintura' );
console.assert( 'negro' === pintura.color , 'color no se sobreescribe en pintura' );

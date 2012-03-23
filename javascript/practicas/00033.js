
function restrict( o , p){
    for( prop in o){
        if(!(prop in p)) delete o[prop];
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

restrict( pintura , figura );
    
console.assert( !('borde' in pintura) , 'borde se suprime de pintura' );
console.assert( 'color' in pintura , 'la porpiedad color queda en pintura' );



function isNumber(o) {
    return typeof o === 'number' && isFinite(o);
}


function sumOnSteroids() {
    var i, res = 0 ,
        number_of_params = arguments.length;

    for (i = 0; i < number_of_params; i++) {
        if ( isNumber(arguments[i]) ){
            res += arguments[i];    
        } 
    }

    return res;
}

// Retorna 0
console.log( sumOnSteroids());

// Retorna 6
console.log( sumOnSteroids(1,2,3));

// Retorna 6
console.log( sumOnSteroids(1 , 'papas', 'cebollas' , 2, 3 )); 

// Retorna 0
console.log( sumOnSteroids(NaN)); 

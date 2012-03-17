function perfecto(n){

    function divisores(x) {
        var result = new Array();
        for ( var i = 1 ; i < x  ; i++ ) {
            if( x % i === 0 ) {
                result.push(i);
            }
        }
        return result;
    }

    function suma(arr){
        result = 0;
        for( var i = 0 ; i < arr.length ; i++ ) {
            result = result + arr[i];
        }
        return result;
    }

    return suma(divisores(n)) - n;

}

console.assert( -22 === perfecto(23) , 'el número 23 es defectivo');
console.assert( 0 === perfecto(28) , 'el número 28 es perfecto');
console.assert( 19 === perfecto(36) , 'el número 36 es abundante');
console.assert( -7 === perfecto(50) , 'el número 50 es defectivo');
console.assert( 60 === perfecto(96) , 'el número 96 es abundante');

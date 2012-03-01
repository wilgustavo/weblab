
// Compara dos arreglos. 
// http://www.hunlock.com/blogs/Mastering_Javascript_Arrays
Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if (this[i].compare) { 
            if (!this[i].compare(testArr[i])) return false;
        }
        if (this[i] !== testArr[i]) return false;
    }
    return true;
}


function mas_uno(a){
    return a + 1;
}

function mult_por2( a , b , c , callback ){
    var i , ar = [];
    for (var i = 0; i < 3; i++) {
        ar[i] = callback(arguments[i] * 2)
    };
    return ar;
}

console.assert( [21,41,61].compare( mult_por2( 10 , 20 , 30 , mas_uno ) ) ,
           "mas_uno con callback" );

// Closures.

function getCtr(){
    var i = 0;
    return function(){
        return ++i;
    }
}

var ctr = getCtr();

console.log( ctr() );
console.log( ctr() );
console.log( ctr() );
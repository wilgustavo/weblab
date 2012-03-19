
// Closure iterator
function iter(arr){
    var i = 0;
    return function(){
        return arr[i++];
    }
}

var next = iter([1,2,3]);
console.assert( 1 === next() , 'arr[0] = 1' );
console.assert( 2 === next() , 'arr[1] = 2' );
console.assert( 3 === next() , 'arr[2] = 3' );

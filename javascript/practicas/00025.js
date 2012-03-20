
// memoize function
 function fib(n) {
     return ( n < 2) ? n : fib( n - 1 ) + fib( n - 2 );
 }


 function memoize(f){
    return function(){
        var args = Array.prototype.slice.call(arguments);
        f.memoize = f.memoize || {};
        return (args in f.memoize) ? f.memoize[args] :
                                     f.memoize[args] = f.apply(this, args);
    }
 }

var fibTest = memoize(fib);  

// Primer llamado
console.time("non-memoized");  
console.log(fibTest(40)); 
console.timeEnd("non-memoized");  

console.time("memoized");  
console.log(fibTest(40));  //0ms 
console.timeEnd("memoized");  
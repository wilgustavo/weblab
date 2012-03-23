
// Definiendo un objeto por sus propiedades. 
var obj = Object.defineProperties( {} , {
    x: {value:30 , writable: true, enumerable:true, configurable:true },
    y: {value:40 , writable: true, enumerable:true, configurable:true },
    pow: { value: function(n){ 
        return n * n } , 
        writable: true, configurable:true } , 
    r: { get: function(){ return Math.sqrt( this.pow(this.x) + this.pow(this.y)); } ,
        enumerable:true, configurable:true }  
});

console.assert( 30 === obj.x , 'valor de x' );
console.assert( 40 === obj.y , 'valor de y' );
console.assert( 'function' === typeof obj.pow , 'pow es una funcion' );
console.assert( 900 === obj.pow( obj.x ) , 'utilizando la funcion obj.pow' );
console.assert( 50 === obj.r , 'valor de r' );
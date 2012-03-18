
Array.prototype.head = function(){
    return this[0];
}

Array.prototype.tail = function(){
    return this.slice(1);
}

var a = [1,2,3,4,5,6];


function sumaArr(arr){
    if ( arr.length === 0 ) { 
        return 0;
    }
    return arr.head() + sumaArr(arr.tail());
}

console.log(a.head());
console.log(a.tail());
console.log(a);
console.log(sumaArr(a));
// Inner private function

var a = function(num){
    var b = function(input){
        return input * 2;
    };
    return 'The result is ' + b(num);
}


console.assert('The result is 4' === a(2) , "inner function 1");
console.assert('The result is 10' === a(5) , "inner function 2");
console.assert( typeof b === 'undefined' , "b is local function");
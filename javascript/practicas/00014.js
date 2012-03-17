// Inner private function

function a(num){
    function b(input){
        return input * 2;
    };
    return 'The result is ' + b(num);
}

console.assert('The result is 4' === a(2) , "inner function 1");
console.assert('The result is 10' === a(5) , "inner function 2");
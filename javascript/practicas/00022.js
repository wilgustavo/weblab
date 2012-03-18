// getter and setters closures

(function(){
    var secret = 0;
    getSecret = function(){
        return secret;
    };
    setSecret = function(n){
        secret = n;
    };
})()

console.assert( 'undefined' === typeof secret , "secret is undefined");
console.assert( 'function' === typeof getSecret , "getSecret is Global");
console.assert( 'function' === typeof setSecret , "setSecret is Global");

setSecret(2);
console.assert( 2 === getSecret() , "secret is set to 2");

setSecret(10);
console.assert( 10 === getSecret() , "secret is set to 10");


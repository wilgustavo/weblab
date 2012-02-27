
var assert = require('assert');

function yell(n){
    return n > 0 ? yell(n-1) + "a" : "hiy";
}

assert( yell(5) == "hiyaaaaa", "Llamando recursivamente" );
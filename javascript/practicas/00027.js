
// Definir un objeto
var pais = {
    nombre: 'Uzbekistan' , 
    capital: 'Taskent' , 
    superficie: 447400 , 
    poblacion: 25563441 , 
    moneda: 'Sum Uzbeko'
};

// Obtener todos sus atributos. 
var getKeys = function(obj){
    var keys = [];
    for( var key in obj ) {
        keys.push(key);
    }
    return keys;
}

console.log(getKeys(pais));

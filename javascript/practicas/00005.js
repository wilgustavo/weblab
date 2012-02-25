
var global = 10;

function cualquiera(){
	
	// declarando una variable local
	var local = 20;

	// sin la definición con var la variable se transforma en global.
	noLocal = 30;

	// accedediento a un variable global
	global++;

	return global;
}

console.log( cualquiera() );

if (typeof local === 'undefined' ){
	console.log("la variable 'local' no esta definida");
} else {
	console.log( local );
}

if ( typeof noLocal === 'undefined' ){
	console.log("la variable 'noLocal' no esta definida");
} else {
	console.log( noLocal );
}

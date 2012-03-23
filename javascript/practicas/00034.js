// getter y setters , SOLO para ECMAScript 5

function pow(x){
    return x*x;
}

function sqrt(x){
    return Math.sqrt(x);
}

function grados(rad){
    return rad * 180 / Math.PI;
}

function radianes(gr){
    return gr * Math.PI / 180;
}

var polar = {
    x: 3 , 
    y: 4 ,
    get radio() {
        return sqrt( pow(this.x) + pow(this.y) );
    } , 
    set radio(r) {
        var a = this.ang;
        this.x = Math.cos(radianes(a)) * r;
        this.y = Math.sin(radianes(a)) * r;
    } ,
    get ang(){
        return grados( Math.atan2(this.y , this.x));
    }
}

console.assert( 5 === polar.radio , 'get radio' ); 
console.assert( 53 === Math.floor(polar.ang) , 'get ang' ); 

polar.radio = 2; // set radio

console.assert( 1.2 === polar.x , 'set radio y cambiar x' ); 
console.assert( 1.6 === polar.y , 'set radio y cambiar y' ); 
console.assert( 53 === Math.floor(polar.ang) , 'pero no cambia el angulo'); 

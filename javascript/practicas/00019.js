// Suffle an array

Array.prototype.swap = function(pos1, pos2){
    var temp = this[pos1];
    this[pos1] = this[pos2];
    this[pos2] = temp;
    return this
}

// Fisher–Yates shuffle
Array.prototype.shuffle = function() {
    var i = this.length;
    for( var i = 0 ; i < this.length ; i++ ) {
        var randPos = Math.floor( Math.random() * this.length );
        this.swap(i,randPos);
    }
    return this;
}

console.log( [].shuffle() );
console.log( [1].shuffle() );
console.log( [1,2].shuffle() );
console.log( [1,2,3,4,5].shuffle() );
console.log( [1,2,3,4,5,6,7,8,9,10].shuffle() );

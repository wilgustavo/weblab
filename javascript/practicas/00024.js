
// Function RGB
function getRGB( rgb ){
  var patt = /^#[A-F0-9]{6}$/;
  if (!patt.test(rgb)) {
      return undefined
  }

  var r = parseInt( rgb.substring(1,3) , 16 );
  var g = parseInt( rgb.substring(3,5) , 16 );
  var b = parseInt( rgb.substring(5,7) , 16 );

  return "rgb(" + r + "," + g + "," + b + ")";
}

console.assert( 'rgb(255,16,1)' === getRGB('#FF1001') , 'RGB #FF1001'); 
console.assert( 'rgb(0,0,0)' === getRGB('#000000') , 'RGB #000000'); 
console.assert( undefined === getRGB('') , 'Undefined'); 
console.assert( undefined === getRGB('?000000') , 'Undefined'); 



// Definicion de un objeto
var libro = {
    titulo: 'Fundacion' ,
    autor: 'Isaac Asimov' , 
    publicacion: 1915 , 
    genero: 'Ciencia Ficcion'
}

// Acceder a un atributo
console.assert( 'Fundacion' === libro.titulo , 'libro.titulo');

// Modificar atributo
console.assert( 1915 === libro.publicacion , 'libro.publicacion');
libro.publicacion = 1951;
console.assert( 1951 === libro.publicacion , 'libro.publicacion');

// Quitar atributo
delete libro.publicacion;
console.assert( undefined === libro.publicacion , 'libro.publicacion');

// Agregar atributo
console.assert( undefined === libro.edicion , 'libro.edicion');
libro.edicion = 'rustica';
console.assert( 'rustica' === libro.edicion , 'libro.edicion');

// Verificar si está definido el atributo
console.assert( true === 'titulo' in libro , 'titulo in libro');
console.assert( false === 'ISBN' in libro , 'ISBN in libro' );

// Acceder atributos mediante corchetes. 
console.assert( 'Fundacion' === libro['titulo'] , 'libro[titulo]');

// Modificar o crear atributos con corchetes
libro['publicacion'] = 1951
console.assert( 1951 === libro.publicacion , 'libro.publicacion');
console.assert( 1951 === libro['publicacion'] , 'libro.publicacion');

// En los corchetes puede existir una expresion 
var tipoAtributo = 'genero';
console.assert( 'Ciencia Ficcion' === libro[tipoAtributo] , 'libro[genero]');
console.assert( 'Ciencia Ficcion' === libro['GENERO'.toLowerCase()] , 'libro[genero]');


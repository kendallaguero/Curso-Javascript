/*  Local Scope o Variables Locales
    - Son las variables declaradas dentro de una funcion.
    - Solo podemos acceder a ellas desde dentro de la funcion.
 */
var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero);
    }
    funcionAnidada();
};
obtenerNumeroLetras('Kendall');
// console.log(numero);
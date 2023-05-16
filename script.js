/* 
    EJERCICIO 21
Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método reduce para calcular la cantidad total de caracteres de todas las palabras en el arreglo.
*/

let arregloPalabras = ["OSO", "BANDA", "PICO", "GASOLINA", "PIÑAS","PROFESOR","codiGO"];

let cantidadTotalDeLetras = arregloPalabras.reduce((acumulador,palabra)=>{
    return acumulador+=palabra.length;
},0)

console.log(cantidadTotalDeLetras);
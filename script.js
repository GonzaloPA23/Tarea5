/* 
        EJERCICIO 37
Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método reduce para concatenar todas las palabras en una sola cadena.
*/

let arregloDePalabras = ["perro","gato","pizarra","marisco","pizza","comida","chef","ganador","vilchez"];

let nuevoArreglo = arregloDePalabras.reduce((concatenada,palabras)=>{
    return concatenada + palabras;
})

console.log(nuevoArreglo);
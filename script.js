/* 
        EJERCICIO 35
Ejercicio de map:
Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la primera letra de cada palabra.
*/

let arregloDePalabras = ["perro","gato","pizarra","marisco","pizza","comida","chef","ganador","vilchez"];

let nuevoArregloPrimeraLetra = arregloDePalabras.map((palabra)=>{
    return palabra[0];
})

console.log(arregloDePalabras);
console.log(nuevoArregloPrimeraLetra);
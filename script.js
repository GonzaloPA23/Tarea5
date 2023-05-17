/* 
        EJERCICIO 74
Ejercicio de funciones:
Crea una función llamada filtrarPositivos que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números positivos.
*/

function filtrarPositivos(numeros) {
  return numeros.filter((numero) => numero > 0);
}

// Ejemplo de uso
const numeros = [-2, 5, -10, 8, -3, 0, 12];
console.log(filtrarPositivos(numeros)); // [5, 8, 12]


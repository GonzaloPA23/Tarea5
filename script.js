/* 
        EJERCICIO 118 -> 28
Implementa una función obtenerImpares que tome un número indeterminado de argumentos numéricos y retorne un nuevo arreglo con los números impares.
*/

const obtenerImpares = (...numeros) => {
  return numeros.filter((numero) => numero % 2 !== 0);
};

console.log(obtenerImpares(1, 2, 3, 4, 5)); // [1, 3, 5]
console.log(obtenerImpares(10, 11, 12, 13, 14, 15)); // [11, 13, 15]
console.log(obtenerImpares(2, 4, 6)); // []

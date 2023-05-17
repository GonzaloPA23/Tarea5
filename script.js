/* 
        EJERCICIO 75
Ejercicio de funciones flecha:
Convierte la función filtrarPositivos en una función flecha.
*/


const filtrarPositivos = (numeros) => {
  return numeros.filter(numero => numero > 0);
};

// Ejemplo de uso
const numeros = [-2, 5, -10, 8, -3, 0, 12];
console.log(filtrarPositivos(numeros)); // [5, 8, 12]
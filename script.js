/* 
        EJERCICIO 29
Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce para calcular el producto de los números pares.
*/

let numeros = [2, 3, 43, 1, 4, 10, 20];

let productoNumeroPares = numeros.reduce((acumulador, numero) => {
  if (numero % 2 === 0) {
    acumulador *= numero;
  }
  return acumulador;
}, numeros.some(numero => numero % 2 === 0) ? 1 : 0);

console.log(productoNumeroPares);

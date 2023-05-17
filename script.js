/* 
        EJERCICIO 61
Ejercicio de funciones:
Crea una función llamada calcularFactorial que tome un número como argumento y devuelva el factorial de ese número.
*/

function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcularFactorial(n - 1);
  }
}

let numero = 5;
console.log(`${numero}! =`,calcularFactorial(numero)); // 120

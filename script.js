/* 
        EJERCICIO 62
Ejercicio de funciones flecha:
Convierte la función calcularFactorial en una función flecha.
*/

let calcularFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcularFactorial(n - 1);
  }
};

let numero = 6;
console.log(`${numero}! =`, calcularFactorial(numero)); // 120

/* 
    EJERCICIO 2
Ejercicio de condicionales:
Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar.
*/

let validar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`);
  }else console.log(`El número ${numero} es impar`);
};

validar(-232);
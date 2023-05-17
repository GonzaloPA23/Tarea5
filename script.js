/* 
        EJERCICIO 96
Ejercicio similar al Project Euler #16:
Calcula la suma de los dígitos del número 2^1000.
*/


let calcularPotencia = (base, exponente) => {
  return BigInt(base) ** BigInt(exponente); // Utilizar BigInt para números grandes
};

let sumaDigitos = (numero) => {
  let suma = 0;
  let numeroString = numero.toString();

  for (let i = 0; i < numeroString.length; i++) {
    suma += parseInt(numeroString[i]);
  }

  return suma;
};

let n = 2;
let exponente = 1000;
let resultado = calcularPotencia(n, exponente);
console.log("2^1000 =", resultado);
console.log("Suma de los dígitos:", sumaDigitos(resultado));

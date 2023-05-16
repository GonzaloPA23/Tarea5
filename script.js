/* 
        EJERCICIO 26
    Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" si la cadena es igual al revés, y "No es un palíndromo" si no lo es.
*/

/* Forma 1 */

let palindromo = (palabra) => {
  palabra = palabra.toLowerCase();
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] !== palabra[palabra.length - i - 1]) {
      return "No es palindromo";
    }
  }
  return "Es palindromo";
};

console.log(palindromo("Amor a Roma"));
console.log(palindromo("Radar"));
console.log(palindromo("Arbol"));
console.log(palindromo("ALÁ"));
console.log(palindromo("ALA"));

/* Forma 2 */
console.log("\n MANERA 2 :")
const esPalindromo = (text) => {
    text = text.toLowerCase(); // Convertir a minúsculas y eliminar espacios en blanco
    return text === text.split('').reverse().join('');
  };
  
  console.log(esPalindromo("Amor a Roma")); // true
  console.log(esPalindromo("RADAR")); // true
  console.log(esPalindromo("Ala")); // true
  console.log(esPalindromo("Esternocleidomastoideo")); // false
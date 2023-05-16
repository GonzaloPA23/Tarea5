/* 
    EJERCICIO 15
Ejercicio combinado:
Dado un arreglo de palabras, utiliza el método filter para crear un nuevo arreglo que contenga solo las palabras que contienen la letra "a". Luego, utiliza el método map para convertir cada palabra en minúsculas.
*/

let arregloPalabras = [
  "OSO",
  "BANDA",
  "PICO",
  "GASOLINA",
  "PIÑAS",
  "PROFESOR",
  "codiGO",
];

/* Forma 1 */

let arregloDePalabrasConA = arregloPalabras.filter((palabra) => {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "A" || palabra[i] === "a") {
      return true;
    }
  }
});

let arregloEnMinusculas = arregloDePalabrasConA.map((palabra) => {
  return palabra.toLowerCase();
});

console.log("Forma 1: ", arregloEnMinusculas);

/* Forma 2 */

let arrEnMinuscula = arregloPalabras
  .filter((palabra) => palabra.toLowerCase().includes("a"))
  .map((palabra) => palabra.toLowerCase());

console.log("Forma 2: ");
console.log(arrEnMinuscula);

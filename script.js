/* 
    EJERCICIO 6
Ejercicio combinado:
Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres. Luego, utiliza el método map para convertir cada palabra en mayúsculas.
*/

let arregloPalabras = ["peruano", "banda", "manzana", "pera", "gasolina", "piñas","profesor","codiGO"];

let LaPalabraEsMayorA5 = () => {
  let palabrasMayoresA5 = [];
  for (let i = 0; i < arregloPalabras.length; i++) {
    if (arregloPalabras[i].length > 5) {
      palabrasMayoresA5.push(arregloPalabras[i]);
    }
  }
  return palabrasMayoresA5;
}

let arregloEnMayusculas = LaPalabraEsMayorA5().map((texto)=>{
    return texto.toUpperCase();
})

console.log("Dado el arreglo: ", arregloPalabras)
console.log("El nuevo arreglo de palabras en MAYÚSCULAS con letras > 5 es: ",arregloEnMayusculas);

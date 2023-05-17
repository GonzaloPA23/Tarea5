/* 
        EJERCICIO 46
Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra.
*/

const obtenerLongitudPalabras = (...arreglo) => {
  return arreglo.map((palabra) => palabra.length);
};

const palabras = ["Hola", "mundo", "JavaScript", "funciones", "anónimas","Aprendiendo mucho"];
const longitudes = obtenerLongitudPalabras(...palabras);

console.log(palabras);
console.log(longitudes); // [4, 5, 10, 9, 8]

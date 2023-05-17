/* 
        EJERCICIO 81
Ejercicio de funciones:
Crea una función llamada esSubstring que tome dos cadenas como argumento y devuelva true si la segunda cadena es un subconjunto de la primera cadena y false si no lo es.
*/
function esSubstring(cadena1, cadena2) {
  return cadena1.includes(cadena2);
}

console.log(esSubstring("Hola mundo", "mundo")); // true
console.log(esSubstring("Hola mundo", "adiós")); // false

/* 
        EJERCICIO 82
Ejercicio de funciones flecha:
Convierte la función esSubstring en una función flecha.
*/
const esSubstring = (cadena1, cadena2) => {
    return cadena1.includes(cadena2);
};
  
  console.log(esSubstring("Hola mundo", "mundo")); // true
  console.log(esSubstring("Hola mundo", "adiós")); // false

/* 
    EJERCICIO 11
Ejercicio de map:
Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la longitud de cada palabra.
*/

let arregloDePalabras = ["legal","hablaremos","cambió","solas","prisionero","odie","ocupada","llevarlo","estuvimos","decírselo"]

let nuevoArregloDeLongitudes = arregloDePalabras.map((texto)=>{
    return texto.length;
})

console.log("Este es el arreglo de palabras: ",arregloDePalabras)
console.log("Este es el arreglo de longitudes de las palabras dadas: ",nuevoArregloDeLongitudes);
/* 
    EJERCICIO 5
Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce para calcular la suma de todos los elementos del arreglo.
*/

let arregloNumeros = [2,5,10,30,27,1,40,-20]

let sumaNumeros = arregloNumeros.reduce((acumulador,numero)=>{
    return acumulador += numero;
},0)

console.log("Dado el siguiente arreglo: ", arregloNumeros);
console.log("La suma total del arreglo es: ", sumaNumeros);


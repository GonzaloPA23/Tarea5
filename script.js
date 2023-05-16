/*
    EJERCICIO 20
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números impares.
*/

let arregloNumeros=[13,32,2,1,32,43,2,1,63,80]

let nuevoArregloDeImpares = arregloNumeros.filter((numero)=>{
    if(numero%2!==0){
        return numero;
    }
})

console.log(nuevoArregloDeImpares)
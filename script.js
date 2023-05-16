/* 
    EJERCICIO 12
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números mayores que 5.
*/


let arregloDeNumeros = [3,324,2,32,32,1,21,2,2,32,4,6];

let nuevoArregloMayoresA5 = arregloDeNumeros.filter((numero)=>{
    if(numero>5) 
    return numero;
})

console.log(nuevoArregloMayoresA5);
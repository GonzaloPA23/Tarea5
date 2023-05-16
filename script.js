/* 
    EJERCICIO 13
Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce para calcular el producto de todos los elementos del arreglo.
*/


let arregloDeNumeros = [3,2,3,2,2,6,2];

let productoDelArreglo = arregloDeNumeros.reduce((acumulador,numero)=>{
    return acumulador*=numero;
})

console.log(productoDelArreglo);
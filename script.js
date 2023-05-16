/* 
        EJERCICIO 27
    Ejercicio de map:
Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el doble de cada número.
*/

let arregloDeNumeros = [10,20,30,40]

let dobleDelArreglo = arregloDeNumeros.map((_elemento)=>{ 
    return _elemento * 2;
})

console.log(dobleDelArreglo)

/* 
    EJERCICIO 3
Ejercicio de map:
Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()).
*/

let arregloNumeros = [2,5,10,20,30,40]

let arregloAlCuadrado = arregloNumeros.map((_elemento)=>{
    return _elemento * _elemento;
})

console.log("Dado el siguiente arreglo",arregloNumeros,"el cuadrado de cada número será: ")
arregloAlCuadrado.forEach((numero,index) =>{
    console.log(arregloNumeros[index],"^ 2 = ",numero);
})

console.log("El núevo arreglo al cuadrado es: ",arregloAlCuadrado);
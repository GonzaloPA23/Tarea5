/* 
        EJERCICIO 39
Ejercicio combinado:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números positivos. Luego, utiliza el método reduce para calcular la suma de los números seleccionados.
*/

let arregloDeNumeros = [32,4,33,5,-24,-2,-45,-10,20];

let nuevoArregloPositivo = arregloDeNumeros.filter((num)=>{
    if(num > 0) return num;
})

let sumaDePositivos = nuevoArregloPositivo.reduce((acumulador, numero)=>{
    return acumulador += numero;
},0)

console.log("Dado el siguiente arreglo:", arregloDeNumeros);
console.log("El nuevo arreglo de solo números positivos: ",nuevoArregloPositivo);
console.log("La suma del arreglo de positivos es:",sumaDePositivos);
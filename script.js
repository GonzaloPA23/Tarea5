/* 
        EJERCICIO 28
Ejercicio de filter:
Dado un arreglo de palabras, utiliza el método filter para crear un nuevo arreglo que contenga solo las palabras que tengan más de 4 caracteres.
*/

let arregloDePalabras = ["oso", "muñeco","troglodita",
"analfabeto","presidente","hola","saco"]

let nuevoArreglo = arregloDePalabras.filter((palabra)=>{
    if(palabra.length>4) return true;
    else return false;
})

console.log(nuevoArreglo)
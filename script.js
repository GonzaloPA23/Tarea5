/* 
        EJERCICIO 70
Ejercicio de funciones:
Crea una función llamada contarVocales que tome una cadena como argumento y devuelva la cantidad de vocales que contiene.
*/

const vocales = ['a','e','i','o','u']

let contarVocales = cadena =>{
    cadena = cadena.toLowerCase();
    let contador = 0;

    for(let i = 0; i < cadena.length;i++){
       if(vocales.includes(cadena[i])){
        contador ++;
       } 
    }
    return contador;
}

console.log(contarVocales("Externo"));
console.log(contarVocales("El amor de Dios es maravilloso"));




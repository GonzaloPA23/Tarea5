/* 
    EJERCICIO 19
Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres en mayúsculas.
*/

let arregloDeNombres= ["Micaela,","MILUZKA","Nair","Gonzalo","RAMIRO","MILENKA","OLIVER","PeDro", "ana","MARIA","maryCIELO"];

let nuevoArreglo = arregloDeNombres.map((nombre)=>{
    for(i=0;i<nombre.length;i++){
        if(nombre[i]===nombre[i].toLowerCase()){
            return 0;
        }
    }
    return nombre;
}).filter((valor)=>valor!==0);

console.log(nuevoArreglo);
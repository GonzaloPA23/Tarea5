/* 
        EJERCICIO 90
Ejercicio de funciones:
Crea una función llamada contarCaracter que tome una cadena y un carácter como argumentos, y devuelva la cantidad de veces que aparece ese carácter en la cadena.
*/


const contarCaracter = (cadena, caracter) => {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) {
        contador++;
      }
    }
    
    return contador;
  };
  
  console.log(contarCaracter("Hola mundo", "o"));     
  console.log(contarCaracter("Bienvenidos", "f"));   
  console.log(contarCaracter("Programación", "a"));  
  

/* 
    EJERCICIO 18
Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento y devuelva "Es una frase" si la cadena contiene espacios en blanco, y "Es una palabra" si la cadena no contiene espacios en blanco.
*/

let validarFraseOPalabra = (cadena) => {
  let contieneEspacio = false;
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] === " ") {
      contieneEspacio = true;
    }
  }

  if (contieneEspacio) {
    console.log("Es una frase:", cadena);
  } else {
    console.log("Es una palabra:", cadena);
  }
};

validarFraseOPalabra("Mañana no hay clases");

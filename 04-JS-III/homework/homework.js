// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var primerelemento = array[0];
  return primerelemento;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoelemento = array[array.length - 1];
  return ultimoelemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo = array.length;
  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i < array.length; i++) {
    entero = array[i];
    if (Number.isInteger(entero) === false) {
      return "El array no es de números enteros";
    } else {
      array[i] = array[i] + 1;
    }
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // var long = palabras.length; estring = [];
  // for (var i=0; i<long-1; i++) {
  //  estring[i] = palabras[i] +' ';
  // }
  // estring.push(palabras[palabras.length-1]);
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var verdad = false;
  for (var i = 0 ; i < array.length; i++) {
    if (array[i] === elemento) {
      var verdad = true;
      break;
    } else {
      verdad = false;
    }
    } return verdad;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumaenteros = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (Number.isInteger(numeros[i]) === true) {
      sumaenteros = sumaenteros + numeros[i];
    } else {
      sumaenteros = sumaenteros;
    }
  } return sumaenteros;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promediopuntaje = 0; numeroresultados = 0; sumaresultados = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    if (Number.isInteger(resultadosTest[i]) === true) {
      sumaresultados = sumaresultados + resultadosTest[i];
      numeroresultados = numeroresultados + 1;
    } else {
      sumaresultaados = sumaresultados;
      numeroresultados = numeroresultados;
    }
  } 
  promediopuntaje = sumaresultados / numeroresultados;
  return promediopuntaje;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var nummasgrande = 0; matenteros = [];
  for (var i = 0; i < numeros.length; i++) {
    if (Number.isInteger(numeros[i]) === true) {
      matenteros[i] = numeros[i];
    } else {
      ;
    }
  } 
  nummasgrande = matenteros[0];
  for (var j = 0; j < matenteros.length; j++) {
    if (matenteros[j+1] > nummasgrande) {
      nummasgrande = matenteros[j+1];
    } else {
      ;
    }
  }
  return nummasgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  productotodos = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1 ) {
    return arguments[0];
  } else {
    for (var i = 0; i < arguments.length; i++) {
      productotodos = productotodos * arguments[i];
    }
  } return productotodos;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (var i = 0; i < arreglo.length; i++) {
     if (arreglo[i] > 18) {
       contador = contador +1;
     } else {
         contador = contador;
       }
     } return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if ((numeroDeDia === 1) || (numeroDeDia === 7)) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var m = [n.toString()];
  if (m[0][0] === '9') {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var igualdad = 0;
  for ( var i = 0; i < arreglo.length; i++ ) {
    if (arreglo[i+1] === arreglo[i]) {
      igualdad = true;
    } else
    igualdad = false;
    break;
  } return igualdad;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  nuevoorden = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] === 'Enero') || (array[i] === 'Marzo') || (array[i] === 'Noviembre')) {
      if (nuevoorden.length === 0) {
        nuevoorden[0] = array[i];
    } else if (nuevoorden.length === 1) {
        nuevoorden[1] = array[i];
    } else if (nuevoorden.length === 2) {
        nuevoorden[2] = array[i];
    } else {
      ;
      }
    }
  } 
  if ((nuevoorden.length === 0) || (nuevoorden.length === 1) || (nuevoorden.length === 2)) {
      return "No se encontraron los meses pedidos";
    } else {
      return nuevoorden;
      }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  mayorquecien = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayorquecien.push(array[i]);
    } else
    ;
  } return mayorquecien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  aumento = []; i = 0; contador = 0;
  if (i === 0) {
    aumento[i] = numero + 2;
    contador = contador + 1;
    for (var j = 1; j < 10; j++) {
      aumento[j] = aumento[j-1] + 2;
      contador = contador + 1;
      if (aumento[j] === contador) {
        return "Se interrumpió la ejecución";
        break;
      } else
      ; 
    }
  } else
  ;
  return aumento;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  aumento = []; i = 0; j = 0;
  aumento[i] = numero + 2;
  j = j + 1;
    while (j < 10) {
      j = j + 1;
      if (j === 5) {
        continue;
      }
      aumento.push(aumento[aumento.length-1] + 2);
    }
  return aumento;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArreglo = []; i=0;
  for ( let clave in objeto) {
    nuevoArreglo[i] = [clave,objeto[clave]];
    i++;
  }
  return nuevoArreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var resultado = {}; var letra = ""; contador = 0;
  for (var i=0; i<string.length;i++) {
    letra = string[i];
    for (var j=0; j<string.length; j++) {
      if (letra === string[j]) {
        contador++;
      } else {
        continue
      }
    }
    resultado[letra] = contador;
    letra = "";
    contador = 0;
  } return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var resultado = []; var letra1 = ""; var letra2 =""; var nuevoArray = [];
  for (var i=0; i<s.length;i++) {
    letra1 = s[i];
    letra2 = s.charAt(i).toUpperCase();
      if (letra1 === letra2) {
        nuevoArray.push(letra1);
      } else {
        resultado.push(letra1);
      }
  }
  resultado.unshift(nuevoArray.join(''));
  return resultado.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var primerPaso = str.split(' ');
  for (var i = 0; i < primerPaso.length; i++) {
    primerPaso[i] = primerPaso[i].split('').reverse().join('');
  }
  return primerPaso.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = numero.toString(); 
  var contador = string.length;
  var long = string.length;
  for (var i=0; i< ((long - (long % 2))/2); i++) {
    if (string[i] === string[contador-1]) {
      var capicua = true;
      contador = contador - 1;
    } else {
      return "No es capicua";
    }
  } if (capicua === true) {
    return "Es capicua"; 
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var conversion = cadena.split(' ');
  var control = []; var resultado = [];
  var nuevocontrol = '';
  var contador = 0;
  for (var i = 0; i < conversion.length; i++) {
    control[i] = conversion[i];
    control = control.toString();
    for (var j = 0; j<control.length; j++) {
      if ((control[j] === 'a') || (control[j] === 'b') || (control[j] === 'c')) {
        nuevocontrol = nuevocontrol + '';
        contador = contador + 1;
      } else {
        nuevocontrol = nuevocontrol + control[j];
      }
    }
    resultado[i] = nuevocontrol;
  }
  return resultado.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var newarr = arr.sort(function(a,b) {return a.length - b.length;});
  return newarr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  salida = [];
  for (var i=0; i<arreglo1.length; i++) {
    for (var j=0; j<arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        salida.push(arreglo1[i]);
      }
    }
  }
  return salida;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


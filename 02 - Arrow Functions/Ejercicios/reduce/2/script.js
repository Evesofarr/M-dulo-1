// Dada una array de palabras, crea una función arrow que use reduce para concatenar todas las palabras en una sola cadena.

let palabra = ["manzana", "pera", "naranja", "uva", "banana", "kiwi", "fresa", "melón", "sandía", "ciruela"]

let palabras = palabra.reduce((string, actual) => string + actual);

console.log(palabras);
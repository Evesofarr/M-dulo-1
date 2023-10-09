// Dada una array de palabras, crea una función arrow que use filter para obtener todas las palabras que contienen la letra "e".

let words = ["elefante", "computadora", "ratón", "estudiante", "bebé", "cereal", "teclado", "espejo", "león", "cine"]

letter = words.filter(word => word.indexOf("e") !== -1)
console.log(letter);
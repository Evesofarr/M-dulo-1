// Dada una matriz de edades, crea una función arrow que use filter para obtener todas las edades menores de 30.

let age = [20, 50, 25, 30, 15, 22, 18, 28, 10, 70]

minors = age.filter(num => num <= 30)
console.log(minors);
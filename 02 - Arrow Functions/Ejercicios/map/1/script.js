// Dada una matriz de nombres, crea una función arrow que use map para convertir todos los nombres a mayúsculas.

let names = ["Juan", "María", "Carlos", "Ana", "Pedro", "Laura", "Diego", "Elena", "Luisa", "Miguel"]
let upperNames = []

upperNames = names.map(nombres => nombres.toUpperCase())
console.log(upperNames);
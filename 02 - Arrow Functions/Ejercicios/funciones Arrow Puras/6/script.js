// Crea una función arrow pura que tome un array de nombres como argumento y devuelva un array de nombres ordenados alfabéticamente.

let nombres = ["manzana", "pera", "naranja", "uva", "banana", "kiwi", "fresa", "melón", "sandía", "ciruela"]

let orden = (frutas) => frutas.sort()
let ordenados = orden(nombres)
console.log(ordenados);
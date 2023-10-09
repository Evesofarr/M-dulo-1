// Dada una array de objetos de productos, crea una función arrow que use map para obtener un array de los nombres de los productos.

let productos = [{
    "nombre": "Papel",
    "precio": 19.99,
}, {
    "nombre": "Libro",
    "precio": 35.80,
}]

names = productos.map(producto =>  producto.nombre)
console.log(names);
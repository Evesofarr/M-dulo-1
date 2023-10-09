// Dada una matriz de objetos de productos con precios, crea una función arrow que use reduce para calcular el precio total de todos los productos.
let productos = [{
        "nombre": "Papel",
        "precio": 5
    },
    {
        "nombre": "Libro",
        "precio": 5
    }
]

let total = productos.reduce((total, actual) => total + actual.precio, 0)
console.log(total);
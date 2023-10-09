// Crea una función arrow pura que tome un objeto con las propiedades ancho y alto (que representan el ancho y el alto de un rectángulo) y devuelva su área calculada (Área = ancho * alto).
let areaRectangulo = {
    "ancho": 2,
    "alto": 4,
}

let calculo = (total) => total.ancho * total.alto;
let area = calculo(areaRectangulo)


console.log(area); 
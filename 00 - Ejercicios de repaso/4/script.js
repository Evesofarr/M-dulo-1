// Escribe un programa que genere un número aleatorio entre el 1 y el
// 100 (pista: hay que utilizar una función, hay que buscarlo en internet
// ya que no lo hemos visto en clase).
function randomizador(max) {
     return Math.floor(Math.random() * max);
     //Se multiplica por el max para que el rango de calculo sea de 0 al numero que nosotros indicamos
    // (Math.floor()) función que redondea decimales hacia abajo 
}
console.log(randomizador(101));
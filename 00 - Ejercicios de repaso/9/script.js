// Bob es un adolescente vago. En una conversación sus conversaciones
// son muy limitadas:
// ● 1Bob responde: “¡Claro!” si le haces una pregunta.
// ● 2Bob responde “¡Eh!, Tranquilízate” si le gritas.
// ● 3Bob responde “¡Eh!, ¡Tranquilízate! Yo sé lo que hago” si le
// haces una pregunta gritándole
// ● 4Bob responde “Vale, con que esas tenemos…” si no le dices
// nada
// ● 5Bob responde “Sin más” a cualquier otra cosa.

alert("hola soy Bob");
let pregunta = prompt("");

if (pregunta !== pregunta.includes("!") && pregunta !== pregunta.includes("?") && pregunta !== pregunta.includes("!?")) {

  alert("Sin más");

} else if (pregunta == pregunta.includes("!") && pregunta == pregunta.includes("?")) {

  alert("¡Eh!, ¡Tranquilízate! Yo sé lo que hago");

} else if (pregunta == pregunta.includes("!") && pregunta !== pregunta.includes("?")) {

  alert("¡Eh!, Tranquilízate")

} else if (pregunta == pregunta.includes("?") && pregunta !== pregunta.includes("!")) {

  alert("¡Claro!")

} else if (pregunta == pregunta.trim("")) {
  
  alert("Vale, con que esas tenemos…")
}
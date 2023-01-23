

const textarea = document.querySelector('.textarea1'); // almacena en la variable Selecciona el elemento textarea del HTML
const mensaje = document.querySelector('.mensaje'); // almacena en la variable Selecciona el elemento mensaje del HTML


// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // Matriz que almacena las letras a convertir y su equivalente

console.table(matrizCodigo);// Muestra la matriz en la consola
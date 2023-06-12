// Comportamiento exclusivo de VAR
console.log(mensaje); // Imprime undefined
var mensaje = "Hola";
console.log(mensaje); // Imprime "Hola"

// El código se interpreta como si se hubiera escrito
// en el siguiente orden:
// var mensaje; // La declaración es movida al principio
// console.log(mensaje); // Imprime undefined
// var mensaje = "Hola";
// console.log(mensaje); // Imprime "Hola"

// ---- temporal dead zone
// console.log(mensaje); // ReferenceError: mensaje is not defined
// let mensaje = "Hola, temporal dead zone";
// console.log(mensaje); // "Hola, temporal dead zone"



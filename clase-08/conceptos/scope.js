var mensaje = "Hola" // Variable con alcance global
function ejemploScope() {
  var mensaje = "Hola"; // Variable con alcance local
  console.log(mensaje);
}

// ejemploScope(); // Imprime "Hola"
// console.log(mensaje); // Error: mensaje is not defined (mensaje no está definido)

// En que orden se prioriza escoger una u otra variable
// let mensaje = "Hola, soy global"; // Variable global

// function ejemploScope() {
//   let mensaje = "Hola, soy local"; // Variable local
//   function imprimirMensaje() {
//     console.log(mensaje); // Accede a la variable local primero
//   }

//   imprimirMensaje();
// }

// // ejemploScope(); // Imprime "Hola, soy local"
// console.log(mensaje)
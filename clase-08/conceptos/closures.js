function contador() {
  let count = 0; // Variable privada

  function incrementar() {
    count++;
    console.log(count);
  }

  return incrementar;
}

const contador1 = contador();
contador1(); // Imprime 1
contador1(); // Imprime 2

const contador2 = contador();
contador2(); // Imprime 1

// -----------------------------------
// El mismo ejemplo un poco más complejo
// function contador() {
//   let count = 0; // Variable privada
//   return {
//     incrementar: () => {
//       count++;
//       console.log(count);
//     },
//     decrementar: () => {
//       count--;
//       console.log(count);
//     },
//   };
// }

// const contador1 = contador();
// contador1.incrementar(); // Imprime 1
// contador1.incrementar(); // Imprime 2
// contador1.decrementar(); // Imprime 1

// const contador2 = contador();
// contador2.decrementar(); // Imprime -1

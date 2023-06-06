// Ejercicio 2: Generador de tablas de multiplicar
// Escribe un programa reciba un número y genere la tabla de multiplicar correspondiente a ese número.

function multiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(`${num} x ${i} = ${resultado} `);
    }
}
multiplicar(10);

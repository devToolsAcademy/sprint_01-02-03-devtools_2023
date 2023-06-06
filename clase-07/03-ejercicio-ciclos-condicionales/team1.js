// Ejercicio 3: Validación de contraseña
// el programa debe recibir una contraseña.
// Aplica las siguientes condiciones de validación:

// La contraseña debe tener al menos 8 caracteres.
// La contraseña debe contener al menos un número.
// La contraseña debe contener al menos una letra mayúscula.
let contrasenha = "A1jjjjjj";

function validacion(str) {
    if (str.length >= 8) {
        if (/\d/.test(str)) {
            if (/[A-Z]/.test(str)) {
                console.log("Tienes acceso");
            }
        }
    } else {
        console.log("No tienes acceso");
    }
}

validacion(contrasenha);

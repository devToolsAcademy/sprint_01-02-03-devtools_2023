const usuariosRegistrados = [
    {
        email: "daniel@google.com",
        name: "Daniel",
        password: "elQueNoEstudiaPierde",
    },
    {
        email: "abdul@google.com",
        name: "Abdul",
        password: "vendranTiemposMejores",
    },
    {
        email: "usuario@google.com",
        name: "juancho",
        password: "123456",
    },
];

const login = () => {
    const userEmail = prompt("Correo Electronico: ");
    console.log(userEmail);
    const userPassword = prompt("Ingrese su contraseña: ");
    console.log(userPassword);

    let loginExitoso = false;
    let usuario;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        usuario = usuariosRegistrados[i];
        // usuario = usuariosRegistrados;
        console.log(usuario);
        if (usuario.email === userEmail && usuario.password === userPassword) {
            loginExitoso = true;
            break;
        }
    }

    if (loginExitoso) {
        alert(`Bienvendio ${usuario.name}`);
    } else {
        alert(
            `El correo ${userEmail} o contraseña ${userPassword} no son correctas`
        );
    }
};
login();

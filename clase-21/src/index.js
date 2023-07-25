//importamos la funcion con la que traemos la informacion de los hoteles
import { consultarHoteles } from "./hoteles.js";

//Accedemos a los elementos del DOM que necesitamos
const buttonConsulta = document.getElementById("printButton");
const main = document.querySelector("main");

//Intersectamos el evento al que queremos usar como gatillo
// el async indica que dentro de esta funcion existiran "await"
buttonConsulta.addEventListener("click", async () => {
  // Aqui ejecutamos la funcion que hace la peticion y le inticamos que espere
  // las respuesta con await, el ".json()" pasa la respuesta a un
  // Formato que podamos usar.
  const respuesta = await consultarHoteles();
  const data = await respuesta.json();
  console.log(data);

  // IMPORTANTE!!!
  // Esta linea de codigo le dice a main que su contenido es VACIO
  // para Limpiar el contenido de main y que no se impriman infinitamente
  // los hoteles, si quieren borren esta linea y vean que pasa
  main.innerHTML = "";

  // recorremos el arreglo con las respuesta y usamos los elementos del DOM
  // para imprimir las cards que hay en la respuesta UNA O UNA
  data.forEach((hotel) => {
    // A partir de aqui con cada ITERASION del for each se repiten los siguientes pasos
    // para crear las cards de los hoteles

    //Creamos el div contenedor de la informacion, ponemos la clase y lo ubicamos ene l main
    const cardHotel = document.createElement("div");
    cardHotel.className = "card";
    main.appendChild(cardHotel);

    //Creamos la imagen, los atributos src, alt, class y la ubicamos como hija del div
    const imagenHotel = document.createElement("img");
    imagenHotel.setAttribute("src", hotel.photo);
    imagenHotel.setAttribute("alt", hotel.name);
    imagenHotel.className = "hotel-image";
    cardHotel.appendChild(imagenHotel);

    //Creamos titulo con el nombre de los hoteles, le asignamos el texto,
    //una clase y lo la ubicamos como hija del div
    const nombreHotel = document.createElement("h2");
    nombreHotel.innerText = hotel.name;
    nombreHotel.className = "hotel-name";
    cardHotel.appendChild(nombreHotel);
  });
});

// Esta funcion hace la peticion de los hoteles al servicio que los almacena
// Mas informacion en la clase de Daniel Mayo
export function consultarHoteles() {
  return fetch(
    "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
  );
}

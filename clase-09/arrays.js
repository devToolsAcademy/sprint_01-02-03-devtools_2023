const arr = [];
console.log(typeof arr);

const numbers = [10, 2, 3, 4, 7];
const variosTipos = [1, 'Hola', true, [2, 4], {}]

//Longitud de un arreglo
console.log(numbers.length);

//Acceder a un elemento de un array

console.log(numbers[0]);
console.log(numbers[-1]);
console.log(numbers[10]);

//Acceder a la ultima posicion

console.log(numbers[numbers.length - 1]);
console.log(numbers[numbers.length - 2]);

console.log(numbers.at(0));
console.log(numbers.at(-1));

//Recorrer el Arreglo
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}

let cervezas = ["Aguila", "Pilsen", "Poker"];
console.log(cervezas);

// push() agrega un nuevo elemento al final del arreglo
cervezas.push("Corona");
console.log(cervezas);

//unshift ()agrega un nuevo elemento al principio del arreglo
cervezas.unshift("Club Colombia");
console.log(cervezas);

//splice() Modifica el contenido del array
cervezas.splice(2, 1, "Heineken");
console.log(cervezas)

//pop() elimina el ultimo elemento de un arreglo

cervezas.pop();
console.log(cervezas)

//shift() elimina el primer elmento del array
cervezas.shift();
console.log(cervezas);

const vinos = ["Gato Negro", "Carinoso", "Moscatel"];

//concat() Concatena dos arreglos, es inmutable
const bebidasAlcoholicas = cervezas.concat(vinos);
console.log(bebidasAlcoholicas);

// const saludo = "Hola Mundo 😂";
// bebidasAlcoholicas[4] = "Hola Mundo";
// console.log(bebidasAlcoholicas);

bebidasAlcoholicas.push("Aguardiente");
console.log(bebidasAlcoholicas)

//indexOf()

console.log(cervezas.indexOf("budweiser"))

//slice()
console.log(cervezas);
const cervezas2 = cervezas.slice(0, 2);
console.log(cervezas2);

//fill()
cervezas.fill("Hola", 1, 2);
console.log(cervezas);

const numbers2 = [1, 2, 3, 4, 5]

const sum = (a, b, c, d, e) => {
    return a + b + c + d + e
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(...numbers2));

//Concatenar 2 Arreglos concat()
const array = [...numbers2, ...cervezas, "Gato"];
console.log(array);

console.log(numbers);
const numbers3 = numbers;
console.log(numbers3);
numbers3[0] = 5;
console.log(numbers3);
console.log(numbers);

// copia real del arreglo

const numbers4 = [...numbers];
console.log(numbers4)
numbers4[0] = 1;
console.log(numbers4)
console.log(numbers)

// Almacenar Objetos en Arrays
const cerveza = [{
    name: "Aguila",
    price: 3000,
    alcohol: 3.5,
}, {
    name: "Modelo",
    price: 5000,
    alcohol: 4.5,
}, {
    name: "Pilsen",
    price: 2500,
    alcohol: 3.8,
}, {
    name: "Poker",
    price: 2000,
    alcohol: 6.0,
},
];
console.log(cerveza);

// Funcion de Primer Orden, es una funcion que se puede pasar como parametroa otra funcion

let fn = function(){
    console.log("Hola Mundo")
}
//fn()

//Funcion de orden superior - reciben una funcion como parametro

function some(f){
    console.log("Antes");
    f()
    console.log("Despues")
}

some(fn)

//Recorrer un arreglo for of
for(let item of cerveza){
    console.log(`${item.name} $ ${item.price} ${item.alcohol} `)
}

//forEach recorre el arreglo y es un funcion de orden superior

cerveza.forEach(e => console.log(e));

//filter() Encuentra todos los elementos del arreglo que cumplan una condicion y retorna un arreglo nuevo

const busqueda = cerveza.filter(item => item.alcohol < 4);
console.log(busqueda);

//map()

const cervezasX2 = cerveza.map(item => {
    return {
        name : item.name,
        price: item.price*2,
        alcohol: item.alcohol,
    }
});

console.log(cervezasX2);
console.log(cerveza)
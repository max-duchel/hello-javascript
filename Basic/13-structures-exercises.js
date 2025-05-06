/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/
/**
 * ARRAY - SET - MAP
 */
// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "pájaro", "conejo", "serpiente"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("caballo") // al principio
animales.push("pez") // al final
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1) // elimina 1 elemento en la posición 2
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set(["1984", "El Quijote", "Cien años de soledad", "La Odisea", "Drácula"])
console.log(libros) // Set(5)

// 5. Añade dos más. Uno de ellos repetido
libros.add("Matar a un ruiseñor")
libros.add("1984") // ya existe
console.log(libros) // Set(6) el último al ser repetido NO se añade

// 6. Elimina uno concreto a tu elección
libros.delete("Drácula")
console.log(libros) // Set(5)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"]
])
console.log(meses) // Map(6)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5))
    console.log(`\nEl mes 5 es ${meses.get(5)}`)

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"])
console.log(`Los meses de verano son: ${meses.get("verano").join(" - ")}`);
console.log(meses.get("verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
/**
 * ✅ Un array permite valores repetidos.
 */
let frutas = ["manzana", "plátano", "pera", "plátano", "uva"]
console.log(frutas)
/**
 * Esto convierte el array en un Set, que es una estructura que no permite 
 * duplicados.
 * ⚠️ Elimina automáticamente elementos repetidos, como "plátano" en este caso.
 */
let frutasSet = new Set(frutas)
console.log(frutas)
/**
 * Esto crea un Map, una estructura de clave-valor.
 * Aquí vas a guardar cosas con una clave asociada.
 */
let frutasMap = new Map()

/**
 * Aquí estás diciendo:
 * ➡️ "Quiero guardar el Set de frutas sin duplicados dentro del mapa 
 *     bajo la clave 'frutasUnicas'".
 */
frutasMap.set("frutasUnicas", frutasSet)

console.log(frutasMap.get("frutasUnicas"))

/**
 * 🔍 Ejemplo práctico:
 * Supón que tienes frutas de dos tiendas y quieres guardar solo las frutas 
 * únicas de cada una, separadas por tienda:
 */
let frutasTiendaA = ["manzana", "plátano", "plátano", "pera"];
let frutasTiendaB = ["pera", "uva", "uva", "melón"];

let setA = new Set(frutasTiendaA); // Elimina duplicados de A
let setB = new Set(frutasTiendaB); // Elimina duplicados de B

let mapaFrutas = new Map();
mapaFrutas.set("Tienda A", setA);
mapaFrutas.set("Tienda B", setB);

console.log(mapaFrutas.get("Tienda A")); // Set { 'manzana', 'plátano', 'pera' }
console.log(mapaFrutas.get("Tienda B")); // Set { 'pera', 'uva', 'melón' }

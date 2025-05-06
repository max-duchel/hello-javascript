/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "1. Mi nombre es: "
let cadena2 = "Max"
console.log(cadena1 + cadena2)

// 2. Muestra la longitud de una cadena de texto
const texto = "esto es una prueba de texto"
console.log(`2. El texto: [${texto}] 
    contiende: ${texto.length} caracteres.\n`)

// 3. Muestra el primer y último carácter de un string
console.log("3. Primer carácter:", cadena2.charAt(0));
console.log("   Último carácter:", cadena2.charAt(cadena2.length - 1));

// 4. Convierte a mayúsculas y minúsculas un string
console.log(`\n4. ${cadena2.toLocaleUpperCase()} - ${cadena2.toLowerCase()}`)

// 5. Crea una cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "\n7. Hola mundo dede JavaScript"
console.log(frase.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(`\n8. ${frase.includes("mundo")}`)

// 9. Comprueba si dos strings son iguales
let a = "JavaScript";
let b = "javascript";
console.log(`\n9. ${a == b}`); // false

// 10. Comprueba si dos strings tienen la misma longitud
console.log(`\n10. ${a.length == b.length}`)
/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
console.log("1. Esto es un comentario en una línea\n")

// 2. Escribe un comentario en varias líneas
console.log(`2. Esto es 
    un comentario 
        en varias
            líneas\n`)

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = `Esto es un string`         // string
let numInt = 26                         // entero
let numDecimal = 39.5                  // decimal
let isBooleano = true                 // boolean
let sinDefinir                       // undefined
let valorNulo = null                // null
let mySymbol = Symbol("mysymbol")  // symbol
let numGrande = BigInt(999999999999999999999999999999999999) // BigInt mayor de 64bits
let numGrande2 = 999999999999999999999999999999999999n

// 4. Imprime por consola el valor de todas las variables
console.log(`4. ${cadena} - ${numInt} - ${numDecimal} - ${isBooleano} - ${sinDefinir} - ${valorNulo} - ${mySymbol.description}`)

// 5. Imprime por consola el tipo de todas las variables

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
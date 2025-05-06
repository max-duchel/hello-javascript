/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

/**************************************************************************************************
 * if/else/else - if/ternaria
*/

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Max"

if (nombre === "Max")
    console.log(`01. Hola, ${nombre}!`)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "maxi_d", pass = 123

if (user === "maxi_d" && pass == "123") // no hace falta que sea del mismo tipo (==)
    console.log(`\n02. Usuario y contraseña correctos.`)

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = -5

if (numero > 0)
    console.log(`\n03. ${numero} es positivo.`)
else if (numero < 0)
    console.log(`\n03. ${numero} es negativo.`)
else
    console.log(`\n03. ${numero} es cero.`)

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 24

if (edad < 18)
    console.log(`\n04. Con ${edad} no puede votar, es menor. Le quedan ${18 - edad} año/s.`)
else if (edad >= 18)
    console.log(`\n04. Con ${edad} sí que puede votar.`)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let tipo = edad >= 18 ? "adulto " : "menor"

console.log(`\n05. ${tipo}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4; // abril

if (mes >= 3 && mes <= 5) {
    console.log("Es primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Es verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Es otoño");
} else if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Es invierno");
} else {
    console.log("Mes inválido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 2)
    console.log("Febrero tiene 28 días");
else if ([4, 6, 9, 11].includes(mes))
    console.log("Este mes tiene 30 días");
else if ([1, 3, 5, 7, 8, 10, 12].includes(mes))
    console.log("Este mes tiene 31 días");
else
    console.log("Mes inválido");

/**************************************************************************************************
 * switch
 */

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "es"

switch (idioma) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hi")
        break
    case "val":
        console.log("Bon dia")
        break
    case "de":
        console.log("Hallo")
        break
    default:
        console.log("No reconocido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("No existe ese mes");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 2:
        console.log("Febrero tiene 28 días");
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 31 días")
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 30 días")
        break
    default:
        console.log("Mes inválido");
}
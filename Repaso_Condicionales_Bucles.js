// ============================================
// REPASO: CONDICIONALES Y BUCLES EN JS
// ============================================
// Este archivo tiene EXPLICACIONES DETALLADAS con ejemplos
// Los ejercicios están SIN resolver para que practiques

// ============================================
// CONDICIONALES - IF, ELSE IF, ELSE
// ============================================

/**
 * ¿QUÉ ES UN CONDICIONAL?
 * Un condicional ejecuta código SOLO si se cumple una condición
 * 
 * ANALOGÍA REAL:
 * "SI llueve, llevo paraguas. SINO, salgo sin paraguas"
 * 
 * En JavaScript:
 * if (llueve) {
 *     llevarParaquas();
 * } else {
 *     salirSinParaquas();
 * }
 */

/**
 * IF - Lo más básico
 * Ejecuta un bloque SOLO SI la condición es true
 */

// EJEMPLO 1:
const edad = 25;

if (edad >= 18) {
    console.log("Eres adulto"); // Se ejecuta porque 25 >= 18 es true
}

// EJEMPLO 2:
const saldo = 100;

if (saldo > 50) {
    console.log("Tienes suficiente dinero"); // Se ejecuta porque 100 > 50 es true
}

// EJERCICIO 1: Condicional simple
// Crea una variable "temperatura" con un valor
// Si la temperatura es mayor a 30, imprime "Hace mucho calor"
// Si es menor o igual a 30, ¿qué pasa? Solo imprime algo si es > 30

console.log("========== EJERCICIO 1: IF SIMPLE ==========");
// Tu código aquí
const temperatura = 32;

if (temperatura > 30) {
    console.log("Hace mucho calor");
}else if(temperatura <=30) {
    console.log("Hace frio");
}

const temperatura2 = 30;

if (temperatura2 > 30) {
    console.log("Hace mucho calor");
}else if(temperatura2 <=30) {
    console.log("Hace frio");
}
//recien me entero que no tenia que usar el else if pero bueno ya lo hice asi jjajaja, igual es bueno que lo use creo
/**
 * IF-ELSE - Ejecuta un bloque U OTRO
 * Dependiendo si la condición es true o false
 */

// EJEMPLO 1:
const numero = 5;

if (numero > 10) {
    console.log("Número es mayor a 10");
} else {
    console.log("Número es 10 o menor"); // Se ejecuta porque 5 > 10 es false
}

// EJEMPLO 2:
const tieneDescuento = false;
const precioOriginal = 100;

if (tieneDescuento) {
    console.log("Precio con descuento: $80");
} else {
    console.log("Precio sin descuento: $100"); // Se ejecuta porque tieneDescuento es false
}

// EJERCICIO 2: IF-ELSE
// Crea una variable "horaActual" con un número entre 0-23
// SI es >= 6 Y < 12, imprime "Buenos días"
// SINO, imprime "No es mañana"

console.log("========== EJERCICIO 2: IF-ELSE ==========");
// Tu código aquí
const horaActual = 10;

if (horaActual >= 6 && horaActual < 12) {
    console.log("Buenos días");
} else {
    console.log("No es mañana");
}


/**
 * IF-ELSE IF-ELSE - Múltiples caminos
 * Cuando tienes MÁS DE 2 opciones posibles
 * 
 * IMPORTANTE:
 * - Se evalúan en ORDEN
 * - Se ejecuta el PRIMER bloque cuya condición sea true
 * - Los siguientes NO se evalúan
 */

// EJEMPLO 1: Calificar una nota
const nota = 75;

if (nota >= 90) {
    console.log("Excelente: A");
} else if (nota >= 80) {
    console.log("Muy bien: B");
} else if (nota >= 70) {
    console.log("Bien: C"); // Se ejecuta porque 75 >= 70 es true
} else if (nota >= 60) {
    console.log("Suficiente: D");
} else {
    console.log("Reprobado: F");
}

// EJEMPLO 2: Categorizar edad
const edadPersona = 35;

if (edadPersona < 13) {
    console.log("Eres un niño");
} else if (edadPersona < 18) {
    console.log("Eres un adolescente");
} else if (edadPersona < 65) {
    console.log("Eres un adulto"); // Se ejecuta porque 35 < 65 es true
} else {
    console.log("Eres un adulto mayor");
}

// EJERCICIO 3: IF-ELSE IF-ELSE
// Crea una variable "velocidad" con un número
// Categoriza según estas reglas:
// - Si es < 20: "Muy lento"
// - Si es >= 20 y < 60: "Velocidad normal"
// - Si es >= 60 y < 100: "Rápido"
// - Si es >= 100: "Muy rápido"

console.log("========== EJERCICIO 3: IF-ELSE IF-ELSE ==========");
// Tu código aquí
const velocidad = 85;

if (velocidad < 20) {
    console.log("Muy lento");
} else if (velocidad >= 20 && velocidad < 60){
    console.log ("Velocidad normal");
}else if (velocidad >= 60 && velocidad < 100){
    console.log ("Rápido");
}else if (velocidad >= 100){
    console.log ("Muy rápido");
}

/**
 * OPERADORES LÓGICOS EN CONDICIONALES
 * && (AND) - TODAS las condiciones deben ser true
 * || (OR) - AL MENOS UNA condición debe ser true
 * ! (NOT) - Invierte el valor
 */

// EJEMPLO 1: AND (&&)
// Para conducir necesitas: Ser mayor de 18 AND tener licencia
const tieneEdad = true;
const tieneLicencia = true;

if (tieneEdad && tieneLicencia) {
    console.log("Puedes conducir"); // Se ejecuta porque AMBAS son true
}

// EJEMPLO 2: OR (||)
// Puedes entrar si: Eres miembro OR pagas entrada
const esMiembro = false;
const pagaEntrada = true;

if (esMiembro || pagaEntrada) {
    console.log("Puedes entrar"); // Se ejecuta porque AL MENOS UNA es true
}

// EJEMPLO 3: NOT (!)
// Ejecuta si NO es viernes
const esViernes = false;

if (!esViernes) {
    console.log("No es viernes"); // Se ejecuta porque !false = true
}

// EJERCICIO 4: Operadores lógicos
// Crea variables:
// - sueldo (número)
// - tieneDeuda (boolean)
// 
// Imprime "Puedes solicitar préstamo" SI:
// - Tu sueldo es mayor a 2000 AND no tienes deuda
// 
// Imprime "Necesitas mejorar tu situación" SI no cumples lo anterior

console.log("========== EJERCICIO 4: OPERADORES LÓGICOS ==========");
// Tu código aquí
const sueldo = 2500;
const tieneDeuda = true;

if (sueldo > 2000 && tieneDeuda) {
    console.log("Puedes solicitar préstamo");
} else {
    console.log("Necesitas mejorar tu situación");
}

/**
 * SWITCH - Para comparar UN valor con múltiples opciones
 * Más legible que muchos if-else cuando tienes muchos casos
 */

// EJEMPLO 1: Día de la semana
const dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles"); // Se ejecuta porque dia === 3
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("No es un día válido");
}

// EJEMPLO 2: Tipo de fruta
const fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Roja o verde"); // Se ejecuta
        break;
    case "plátano":
        console.log("Amarillo");
        break;
    case "naranja":
        console.log("Naranja");
        break;
    default:
        console.log("Fruta desconocida");
}

// EJERCICIO 5: SWITCH
// Crea una variable "paisCode" con valores "ES", "FR", "IT", "DE"
// Usa switch para imprimir:
// - "ES" → "España"
// - "FR" → "Francia"
// - "IT" → "Italia"
// - "DE" → "Alemania"
// - default → "País desconocido"

console.log("========== EJERCICIO 5: SWITCH ==========");
// Tu código aquí
const paisCode = "DE";

switch (paisCode) {
    case "FR":
        console.log("Francia");
        break;
    case "ES":
        console.log("España");
        break;
    case "IT":
        console.log("Italia");
        break;
    case "DE":
        console.log("Alemania");
        break;
    default:
        console.log("País desconocido");
}

// ============================================
// BUCLES - FOR, WHILE, DO-WHILE
// ============================================

/**
 * ¿QUÉ ES UN BUCLE?
 * Un bucle REPITE código múltiples veces
 * 
 * ANALOGÍA:
 * "Quiero contar del 1 al 10"
 * Sin bucle: console.log(1); console.log(2); ... console.log(10);
 * Con bucle: repetir 10 veces: console.log(numero que aumenta);
 */

/**
 * FOR - Bucle con contador conocido
 * Cuando SABES cuántas veces repetir
 * 
 * Estructura:
 * for (inicio; condición; incremento) {
 *     // código a repetir
 * }
 */

// EJEMPLO 1: Imprimir números del 1 al 5
console.log("\n========== EJEMPLO FOR: Números 1-5 ==========");
for (let i = 1; i <= 5; i++) {
    // i = 1 (inicio)
    // i <= 5 (condición: mientras sea true, continúa)
    // i++ (incrementa i en 1 cada vuelta)
    console.log("Número: " + i);
}
// Imprime: 1, 2, 3, 4, 5

// EJEMPLO 2: Contar hacia atrás
console.log("\n========== EJEMPLO FOR: Contar atrás ==========");
for (let j = 5; j >= 1; j--) {
    console.log(j);
}
// Imprime: 5, 4, 3, 2, 1

// EJEMPLO 3: Saltar números (incremento de 2)
console.log("\n========== EJEMPLO FOR: Incremento de 2 ==========");
for (let k = 0; k <= 10; k += 2) {
    console.log(k);
}
// Imprime: 0, 2, 4, 6, 8, 10

// EJERCICIO 6: FOR simple
// Imprime los números del 1 al 20

console.log("========== EJERCICIO 6: FOR simple ==========");
// Tu código aquí
for (let i = 1; i <= 20; i++) {
    console.log("Número: " + i);
}

for (let i = 20; i >= 1; i--) {
    console.log("Numeros de 20 a 1: " + i);
}

/**
 * FOR con ARRAYS
 * Usamos el for para recorrer (iterar) cada elemento de un array
 */

// EJEMPLO 1: Recorrer array de frutas
console.log("\n========== EJEMPLO FOR: Array de frutas ==========");
const frutas = ["manzana", "plátano", "naranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    // i empieza en 0 (primer índice)
    // i < frutas.length (mientras i sea menor que el tamaño del array)
    // frutas[i] accede al elemento en posición i
    console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}
// Imprime: Fruta 1: manzana, Fruta 2: plátano, etc.

// EJEMPLO 2: Sumar todos los números de un array
console.log("\n========== EJEMPLO FOR: Sumar array ==========");
const numeros = [10, 20, 30, 40];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // suma = suma + numeros[i]
}

console.log("Suma total: " + suma); // 100

// EJERCICIO 7: FOR con array
// Tienes este array: [5, 10, 15, 20, 25]
// Imprime cada número multiplicado por 2

console.log("========== EJERCICIO 7: FOR con array ==========");
// Tu código aquí
const array = [5, 10, 15, 20, 25];

for (let i = 0; i < array.length; i++) {
    console.log("Número por 2: " + (array[i] * 2));
}

/**
 * FOR...OF - Bucle moderno para arrays
 * Más simple cuando solo necesitas el VALOR (no el índice)
 * 
 * Sintaxis:
 * for (const elemento of array) {
 * }
 */

// EJEMPLO 1: Recorrer array con for...of
console.log("\n========== EJEMPLO FOR...OF ==========");
const colores = ["rojo", "azul", "verde"];

for (const color of colores) {
    console.log("Color: " + color);
}
// Imprime: Color: rojo, Color: azul, Color: verde

// EJERCICIO 8: FOR...OF
// Array: ["JavaScript", "Python", "Java"]
// Imprime cada lenguaje en mayúsculas usando .toUpperCase()

console.log("========== EJERCICIO 8: FOR...OF ==========");
// Tu código aquí

const lenguajes = ["JavaScript", "Python", "Java"];

for (const lenguaje of lenguajes) {
    console.log(lenguaje.toUpperCase());
}


/**
 * FOR...IN - Bucle para objetos
 * Recorre las PROPIEDADES (claves) de un objeto
 * 
 * NO usar con arrays (problemas potenciales)
 */

// EJEMPLO 1: Recorrer propiedades de objeto
console.log("\n========== EJEMPLO FOR...IN ==========");
const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
};

for (const propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
// Imprime:
// nombre: Carlos
// edad: 30
// ciudad: Madrid

// EJERCICIO 9: FOR...IN
// Crea un objeto "producto" con propiedades: nombre, precio, stock
// Recorre todas sus propiedades con for...in e imprime cada una

console.log("========== EJERCICIO 9: FOR...IN ==========");
// Tu código aquí
const producto = {
    nombre: "Camiseta",
    precio: 20,
    stock: 100
};

for (const propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
}

/**
 * WHILE - Bucle sin contador fijo
 * Se ejecuta MIENTRAS una condición sea true
 * 
 * IMPORTANTE: Asegúrate que la condición sea false en algún momento
 * SINO: BUCLE INFINITO (nunca termina)
 */

// EJEMPLO 1: Contar mientras sea menor a 5
console.log("\n========== EJEMPLO WHILE ==========");
let contador = 1;

while (contador <= 5) {
    console.log("Contador: " + contador);
    contador++; // IMPORTANTE: incrementar para terminar
}
// Imprime: 1, 2, 3, 4, 5

// EJEMPLO 2: Buscar un número en un array
console.log("\n========== EJEMPLO WHILE: Búsqueda ==========");
const items = [3, 7, 2, 9, 5];
const numeroBuscado = 9;
let indice = 0;
let encontrado = false;

while (indice < items.length && !encontrado) {
    if (items[indice] === numeroBuscado) {
        encontrado = true;
        console.log("Encontrado en posición: " + indice);
    }
    indice++;
}

// EJERCICIO 10: WHILE
// Crea un while que imprima números del 10 al 1 (contando hacia atrás)

console.log("========== EJERCICIO 10: WHILE ==========");
// Tu código aquí
let numero2 = 10;

while (numero2 >= 1) {
    console.log("Número: " + numero2);
    numero2--;
}

/**
 * DO-WHILE - Se ejecuta AL MENOS una vez
 * Verifica la condición DESPUÉS de ejecutar el código
 */

// EJEMPLO 1: Generar número aleatorio hasta que sea 5
console.log("\n========== EJEMPLO DO-WHILE ==========");
let numeroAleatorio;

do {
    numeroAleatorio = Math.floor(Math.random() * 10); // 0-9
    console.log("Número: " + numeroAleatorio);
} while (numeroAleatorio !== 5); // Continúa hasta que sea 5

console.log("¡Salió el 5!");

// EJERCICIO 11: DO-WHILE
// Crea un do-while que:
// - Genera un número aleatorio entre 1 y 100
// - Imprime el número
// - Continúa hasta que sea mayor a 80

console.log("========== EJERCICIO 11: DO-WHILE ==========");
// Tu código aquí
let numeroAleatorio2;

do {
    numeroAleatorio2 = Math.floor(Math.random() * 100) + 1; // 1-100
    console.log("Número: " + numeroAleatorio2);
} while (numeroAleatorio2 <= 80);
/**
 * BREAK - Rompe/sale del bucle INMEDIATAMENTE
 */

// EJEMPLO 1: Salir cuando encuentres lo que buscas
console.log("\n========== EJEMPLO BREAK ==========");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i sea 5
    }
    console.log(i);
}
// Imprime: 1, 2, 3, 4 (no imprime 5 ni después)

// EJERCICIO 12: BREAK
// For del 1 al 20
// Si el número es 13, rompe el bucle
// Imprime los números antes de romper

console.log("========== EJERCICIO 12: BREAK ==========");
// Tu código aquí
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        break; // Sale del bucle cuando i sea 13 o para ser exactos parara en el numero 12
    }
    console.log(i);
}


/**
 * CONTINUE - Salta a la siguiente iteración
 * No ejecuta el código restante de esta vuelta
 */

// EJEMPLO 1: Saltar números pares
console.log("\n========== EJEMPLO CONTINUE ==========");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta los pares
    }
    console.log(i); // Solo imprime impares
}
// Imprime: 1, 3, 5, 7, 9

// EJERCICIO 13: CONTINUE
// For del 1 al 15
// Si el número es divisible por 3, sáltalo
// Imprime los números que no son divisibles por 3

console.log("========== EJERCICIO 13: CONTINUE ==========");
// Tu código aquí
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue; // Salta los divisibles por 3
    }
    console.log(i);
}

/**
 * COMBINANDO TODO: Problemas más complejos
 */

// EJEMPLO 1: Encontrar el número mayor en un array
console.log("\n========== EJEMPLO COMBINADO: Número mayor ==========");
const numeros2 = [15, 3, 42, 8, 25, 10];
let numeroMayor = numeros2[0]; // Empezamos con el primer elemento

for (let i = 1; i < numeros2.length; i++) {
    if (numeros2[i] > numeroMayor) {
        numeroMayor = numeros2[i];
    }
}

console.log("Número mayor: " + numeroMayor); // 42

// EJERCICIO 14: COMBINADO - Encontrar número menor
// Array: [23, 5, 78, 12, 3, 45]
// Encuentra el número menor y imprime "El menor es: X"

console.log("========== EJERCICIO 14: COMBINADO - Número menor ==========");
// Tu código aquí
const numeros3 = [23, 5, 78, 12, 3, 45];
let numeroMenor = numeros3[0]; // Empezamos con el primer elemento

for (let i = 1; i < numeros3.length; i++) {
    if (numeros3[i] < numeroMenor) {
        numeroMenor = numeros3[i];
    }

}

console.log("El menor es: " + numeroMenor); // 3

// EJEMPLO 2: Contar cuántos elementos cumplen una condición
console.log("\n========== EJEMPLO COMBINADO: Contar pares ==========");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contadorPares = 0;

for (const num of nums) {
    if (num % 2 === 0) {
        contadorPares++;
    }
}

console.log("Números pares: " + contadorPares); // 5

// EJERCICIO 15: COMBINADO - Contar números mayores a 10
// Array: [5, 15, 8, 22, 3, 18, 9, 30]
// Cuenta cuántos números son mayores a 10
// Imprime "Números mayores a 10: X"

console.log("========== EJERCICIO 15: COMBINADO - Contar mayores a 10 ==========");
// Tu código aquí

const nums2 = [5, 15, 8, 22, 3, 18, 9, 30];
let contadorMayoresA10 = 0;

for (const num of nums2) {
    if (num > 10) {
        contadorMayoresA10++;
    }
}

console.log("Números mayores a 10: " + contadorMayoresA10); // 4


// ============================================
// RESUMEN - CUÁNDO USAR QUÉ
// ============================================

/**
 * CONDICIONALES:
 * - if: Una sola condición
 * - if-else: Dos opciones
 * - if-else if-else: Tres o más opciones
 * - switch: Comparar UN valor con muchas opciones
 * 
 * BUCLES:
 * - for: Cuando sabes cuántas iteraciones
 * - for...of: Recorrer array cuando necesitas valores
 * - for...in: Recorrer objeto (sus propiedades)
 * - while: Cuando no sabes cuántas iteraciones
 * - do-while: Cuando necesitas al menos una ejecución
 * - break: Salir del bucle
 * - continue: Saltar a la siguiente iteración
 */

// ============================================
// MÉTODOS DE ARRAYS EN JAVASCRIPT
// ============================================
// Los arrays tienen métodos especiales para manipular datos
// Estos son MUY usados en JavaScript moderno

/**
 * ¿QUÉ ES UN MÉTODO?
 * Un método es una función que pertenece a un objeto
 * Sintaxis: array.nombreMetodo(función)
 *
 * Los métodos más importantes transforman arrays sin usar for
 */

// ============================================
// MAP() - Transforma cada elemento del array
// ============================================

/**
 * map() ejecuta una función en CADA elemento
 * y devuelve un NUEVO array con los resultados
 *
 * Sintaxis: array.map((elemento) => {
 *     return elemento transformado;
 * });
 */

// EJEMPLO 1: Duplicar cada número
const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map((numero) => {
  return numero * 2;
});

console.log(numeros); // [1, 2, 3, 4, 5] (original sin cambios)
console.log(duplicados); // [2, 4, 6, 8, 10] (nuevo array)

// EJEMPLO 2: Convertir strings a mayúsculas
const frutas = ["manzana", "pera", "naranja"];

const frutasMayusculas = frutas.map((fruta) => {
  return fruta.toUpperCase();
});

console.log(frutasMayusculas); // ["MANZANA", "PERA", "NARANJA"]

// EJEMPLO 3: Extraer propiedades de objetos
const personas = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 35 },
];

const nombres = personas.map((persona) => {
  return persona.nombre;
});

console.log(nombres); // ["Carlos", "Ana", "Juan"]

// EJEMPLO 4: map() más corto (sin llaves)
const precios = [10, 20, 30];
const conImpuesto = precios.map((precio) => precio * 1.21);
console.log(conImpuesto); // [12.1, 24.2, 36.3]

// EJERCICIO 1: MAP
// Array: [2, 4, 6, 8]
// Usa map para crear un nuevo array donde cada número esté elevado al cuadrado
// Resultado esperado: [4, 16, 36, 64]

console.log("========== EJERCICIO 1: MAP ==========");
// Tu código aquí
const numerosEj1 = [2, 4, 6, 8];
const cuadrados = numerosEj1.map((numero) => numero * numero);
console.log(cuadrados); // [4, 16, 36, 64]

// ============================================
// FILTER() - Filtra elementos que cumplen una condición
// ============================================

/**
 * filter() devuelve un NUEVO array solo con elementos
 * que cumplen la condición (retornen true)
 *
 * Sintaxis: array.filter((elemento) => {
 *     return condición;
 * });
 */

// EJEMPLO 1: Obtener solo números mayores a 5
const numeros2 = [1, 5, 8, 3, 10, 2, 7];

const mayoresA5 = numeros2.filter((numero) => {
  return numero > 5;
});

console.log(mayoresA5); // [8, 10, 7]

// EJEMPLO 2: Obtener solo palabras largas
const palabras = ["gato", "elefante", "sol", "programación"];

const palabrasLargas = palabras.filter((palabra) => {
  return palabra.length > 5;
});

console.log(palabrasLargas); // ["elefante", "programación"]

// EJEMPLO 3: Filtrar objetos
const usuarios = [
  { nombre: "Carlos", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Juan", activo: true },
];

const usuariosActivos = usuarios.filter((usuario) => {
  return usuario.activo;
});

console.log(usuariosActivos);
// [
//     { nombre: "Carlos", activo: true },
//     { nombre: "Juan", activo: true }
// ]

// EJEMPLO 4: filter() más corto
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros3.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// EJERCICIO 2: FILTER
// Array: [5, 10, 15, 20, 25, 30, 35]
// Filtra solo los números mayores a 15
// Guarda el resultado en una variable e imprime

console.log("========== EJERCICIO 2: FILTER ==========");
// Tu código aquí
const numerosEj2 = [5, 10, 15, 20, 25, 30, 35];
const mayoresA15 = numerosEj2.filter((numero) => numero > 15);
console.log(mayoresA15); // [20, 25, 30, 35]

// ============================================
// FIND() - Encuentra el PRIMER elemento que cumple condición
// ============================================

/**
 * find() devuelve el PRIMER elemento que cumple la condición
 * Si ninguno cumple, devuelve undefined
 *
 * Sintaxis: array.find((elemento) => {
 *     return condición;
 * });
 */

// EJEMPLO 1: Encontrar el primer número mayor a 7
const numeros4 = [2, 5, 3, 8, 1, 10];

const primeroMayorA7 = numeros4.find((numero) => {
  return numero > 7;
});

console.log(primeroMayorA7); // 8 (primer número > 7)

// EJEMPLO 2: Encontrar un usuario por nombre
const personas2 = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 35 },
];

const personaEncontrada = personas2.find((persona) => {
  return persona.nombre === "Ana";
});

console.log(personaEncontrada); // { nombre: "Ana", edad: 25 }

// EJEMPLO 3: find() más corto
const usuarios2 = [
  { id: 1, nombre: "Carlos" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Juan" },
];

const usuario = usuarios2.find((u) => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Ana" }

// EJERCICIO 3: FIND
// Array: ["gato", "sol", "elefante", "programación"]
// Usa find para encontrar la PRIMERA palabra que tenga más de 5 letras
// Guarda el resultado e imprime

console.log("========== EJERCICIO 3: FIND ==========");
// Tu código aquí
const palabrasEj3 = ["gato", "sol", "elefante", "programación"];
const palabraLarga = palabrasEj3.find((palabra) => palabra.length > 5);
console.log(palabraLarga); // "elefante"
// ============================================
// SOME() - Verifica si ALGÚN elemento cumple condición
// ============================================

/**
 * some() devuelve true si AL MENOS UN elemento cumple
 * devuelve false si ninguno cumple
 *
 * Sintaxis: array.some((elemento) => {
 *     return condición;
 * });
 */

// EJEMPLO 1: ¿Hay algún número mayor a 10?
const numeros5 = [3, 5, 7, 9];

const hayMayorA10 = numeros5.some((numero) => {
  return numero > 10;
});

console.log(hayMayorA10); // false

// EJEMPLO 2: ¿Hay algún usuario inactivo?
const usuarios3 = [
  { nombre: "Carlos", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Juan", activo: true },
];

const hayInactivo = usuarios3.some((usuario) => {
  return !usuario.activo; // NOT activo = inactivo
});

console.log(hayInactivo); // true (porque Ana es inactiva)

// EJEMPLO 3: some() más corto
const nums = [2, 4, 6, 8];
const hayImpar = nums.some((n) => n % 2 !== 0);
console.log(hayImpar); // false (todos son pares)

// EJERCICIO 4: SOME
// Array de números: [10, 20, 30, 40, 50]
// Verifica si ALGUNO es menor a 25
// Imprime true o false

console.log("========== EJERCICIO 4: SOME ==========");
// Tu código aquí

const numerosEj4 = [10, 20, 30, 40, 50];
const algunoMenorA25 = numerosEj4.some((numero) => numero < 25);
console.log(algunoMenorA25); // true

// ============================================
// EVERY() - Verifica si TODOS los elementos cumplen condición
// ============================================

/**
 * every() devuelve true solo si TODOS cumplen
 * devuelve false si al menos uno no cumple
 *
 * Sintaxis: array.every((elemento) => {
 *     return condición;
 * });
 */

// EJEMPLO 1: ¿Todos los números son positivos?
const numeros6 = [1, 2, 3, 4, 5];

const todosPositivos = numeros6.every((numero) => {
  return numero > 0;
});

console.log(todosPositivos); // true

// EJEMPLO 2: ¿Todos los usuarios son mayores de 18?
const personas3 = [
  { nombre: "Carlos", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 35 },
];

const todosMayoresDeEdad = personas3.every((persona) => {
  return persona.edad >= 18;
});

console.log(todosMayoresDeEdad); // true

// EJEMPLO 3: every() más corto
const nums2 = [2, 4, 6, 8, 9];
const todosPares = nums2.every((n) => n % 2 === 0);
console.log(todosPares); // false (9 es impar)

// EJERCICIO 5: EVERY
// Array: ["JavaScript", "Python", "Java", "C"]
// Verifica si TODAS las palabras tienen más de 3 letras
// Imprime true o false

console.log("========== EJERCICIO 5: EVERY ==========");
// Tu código aquí
const lenguajes = ["JavaScript", "Python", "Java", "C"];
const todasLargas = lenguajes.every((lenguaje) => lenguaje.length > 3);
console.log(todasLargas); // false (C tiene 1 letra)
//explicaion este every evalua si todas las palabras en el array "lenguajes" tienen más de 3 letras. Como "C" tiene solo 1 letra, la condición no se cumple para todas, por lo que el resultado es false.

// ============================================
// REDUCE() - Combina todos los elementos en UN valor
// ============================================

/**
 * reduce() es el más poderoso, pero también el más complejo
 * Combina todos los elementos en UN SOLO resultado
 *
 * Sintaxis: array.reduce((acumulador, elemento) => {
 *     return acumulador + elemento;
 * }, valorInicial);
 *
 * acumulador = resultado parcial (va acumulando)
 * elemento = elemento actual
 * valorInicial = valor con el que empieza el acumulador
 */

// EJEMPLO 1: Sumar todos los números
const numeros7 = [1, 2, 3, 4, 5];

const suma = numeros7.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0); // Empieza con 0

console.log(suma); // 15
// Paso a paso:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// EJEMPLO 2: Multiplicar todos los números
const numeros8 = [1, 2, 3, 4];

const producto = numeros8.reduce((acumulador, numero) => {
  return acumulador * numero;
}, 1); // Empieza con 1 (elemento neutro de multiplicación)

console.log(producto); // 24

// EJEMPLO 3: Convertir array a string
const frutas2 = ["manzana", "pera", "naranja"];

const frutasString = frutas2.reduce((acumulador, fruta) => {
  return acumulador + ", " + fruta;
}, "Frutas");

console.log(frutasString); // "Frutas, manzana, pera, naranja"

// EJERCICIO 6: REDUCE
// Array: [5, 10, 15, 20]
// Usa reduce para multiplicar todos los números
// Resultado esperado: 15000 (5 * 10 * 15 * 20)

console.log("========== EJERCICIO 6: REDUCE ==========");
// Tu código aquí
const numerosEj6 = [5, 10, 15, 20];
const multiplicacion = numerosEj6.reduce((acumulador, numero) => {
  return acumulador * numero;
}, 1); // Empieza con 1
console.log(multiplicacion); // 15000
// Está multiplicando todos los números del array: 5 * 10 = 50, 50 * 15 = 750, 750 * 20 = 15000

// ============================================
// COMBINANDO MÉTODOS (ENCADENAMIENTO)
// ============================================

/**
 * Puedes usar multiple métodos uno después de otro
 * Cada uno devuelve un array nuevo
 */

// EJEMPLO 1: Filtrar > 5, luego duplicar cada uno
const numeros9 = [1, 3, 5, 7, 9, 10, 12];

const resultado = numeros9
  .filter((n) => n > 5) // [7, 9, 10, 12]
  .map((n) => n * 2); // [14, 18, 20, 24]

console.log(resultado); // [14, 18, 20, 24]

// EJEMPLO 2: Filtrar usuarios activos, luego obtener sus nombres
const personas4 = [
  { nombre: "Carlos", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Juan", activo: true },
];

const nombresActivos = personas4
  .filter((p) => p.activo) // Filtra activos
  .map((p) => p.nombre); // Obtiene nombres

console.log(nombresActivos); // ["Carlos", "Juan"]

// EJERCICIO 7: ENCADENAMIENTO
// Array: [2, 5, 3, 8, 1, 10, 4, 7]
// 1. Filtra números mayores a 3
// 2. Multiplica cada uno por 2
// 3. Guarda en una variable e imprime
// Resultado esperado: [16, 20, 14, 18] (después de filtrar y multiplicar)

console.log("========== EJERCICIO 7: ENCADENAMIENTO ==========");
// Tu código aquí
const numerosEj7 = [2, 5, 3, 8, 1, 10, 4, 7];
const resultadoEj7 = numerosEj7
  .filter((n) => n > 3) // Filtra números mayores a 3
  .map((n) => n * 2); // Multiplica cada uno por 2

console.log(resultadoEj7); // [16, 20, 14, 18]

// ============================================
// RESUMEN DE MÉTODOS
// ============================================

/**
 * map() - Transforma cada elemento
 *   Devuelve: nuevo array con elementos transformados
 *   Caso: cambiar valores, extraer propiedades
 *
 * filter() - Filtra elementos
 *   Devuelve: nuevo array solo con elementos que cumplen
 *   Caso: buscar elementos específicos
 *
 * find() - Encuentra un elemento
 *   Devuelve: el primer elemento que cumple (o undefined)
 *   Caso: buscar UN elemento específico
 *
 * some() - Verifica si ALGUNO cumple
 *   Devuelve: true o false
 *   Caso: validar que existe al menos uno
 *
 * every() - Verifica si TODOS cumplen
 *   Devuelve: true o false
 *   Caso: validar que todos cumplen
 *
 * reduce() - Combina en UN valor
 *   Devuelve: un solo valor (suma, producto, etc)
 *   Caso: acumular, contar, promediar
 */

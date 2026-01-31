// ============================================
// FUNCIONES EN JAVASCRIPT
// ============================================
// Una función es un bloque de código reutilizable
// Te permite no repetir código

/**
 * ¿QUÉ ES UNA FUNCIÓN?
 *
 * ANALOGÍA:
 * Una función es como una receta de cocina
 * - Ingredientes (parámetros)
 * - Pasos a seguir (código dentro)
 * - Resultado final (return)
 *
 * Puedes usar la receta varias veces sin repetir todo
 */

// ============================================
// FUNCIÓN BÁSICA - SIN PARÁMETROS Y SIN RETURN
// ============================================

/**
 * Estructura básica:
 * function nombreFuncion() {
 *     // código a ejecutar
 * }
 *
 * Para ejecutar: nombreFuncion();
 */

// EJEMPLO 1: Función que saluda
function saludar() {
  console.log("¡Hola!");
}

// Llamar la función (ejecutarla)
saludar(); // Imprime: "¡Hola!"
saludar(); // Imprime: "¡Hola!" (reutilizable)
saludar(); // Imprime: "¡Hola!"

// EJEMPLO 2: Función que imprime información
function mostrarInfo() {
  console.log("Mi nombre es Alan");
  console.log("Tengo 22 años");
  console.log("Vivo en San Juan");
}

mostrarInfo(); // Ejecuta todas las líneas dentro

// EJERCICIO 1: Función sin parámetros
// Crea una función llamada "imprimirMisFrutas" que:
// - Imprime 3 frutas que te gusten (usando console.log)
// Llama la función 2 veces para demostrar que funciona

console.log("========== EJERCICIO 1: Función básica ==========");
// Tu código aquí
function imprimirMisFrutas() {
  console.log("Manzana");
  console.log("Banana");
  console.log("Cereza");
}

imprimirMisFrutas();
imprimirMisFrutas();

// ============================================
// FUNCIÓN CON PARÁMETROS
// ============================================

/**
 * Los parámetros permiten pasarle información a la función
 *
 * Estructura:
 * function nombreFuncion(parametro1, parametro2) {
 *     // usar parametro1 y parametro2
 * }
 *
 * Para llamar: nombreFuncion(valor1, valor2);
 */

// EJEMPLO 1: Función con 1 parámetro
function saludarPersona(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

saludarPersona("Carlos"); // Imprime: "¡Hola, Carlos!"
saludarPersona("María"); // Imprime: "¡Hola, María!"
saludarPersona("Juan"); // Imprime: "¡Hola, Juan!"

// EJEMPLO 2: Función con 2 parámetros
function sumarDosNumeros(a, b) {
  const resultado = a + b;
  console.log(a + " + " + b + " = " + resultado);
}

sumarDosNumeros(5, 3); // Imprime: "5 + 3 = 8"
sumarDosNumeros(10, 20); // Imprime: "10 + 20 = 30"

// EJEMPLO 3: Función con 3 parámetros
function calcularPrecioFinal(precioBase, cantidad, impuesto) {
  const subtotal = precioBase * cantidad;
  const total = subtotal + subtotal * impuesto;
  console.log("Total a pagar: $" + total);
}

calcularPrecioFinal(50, 3, 0.21); // Subtotal: 150, Total: 181.50
calcularPrecioFinal(100, 2, 0.21); // Subtotal: 200, Total: 242

// EJERCICIO 2: Función con parámetros
// Crea una función "multiplicar(a, b)" que:
// - Reciba dos números como parámetros
// - Imprime "X * Y = Z" (usando los parámetros)
// Llama la función 3 veces con números diferentes

console.log("========== EJERCICIO 2: Función con parámetros ==========");
// Tu código aquí
function multiplicar2(a, b) {
  const resultado = a * b;
  console.log(a + " * " + b + " = " + resultado);
}

multiplicar2(4, 5);
multiplicar2(7, 3);
multiplicar2(10, 2);

// ============================================
// FUNCIÓN CON RETURN (devuelve un valor)
// ============================================

/**
 * El return permite que la función DEVUELVA un valor
 * Para usarlo después en otra parte del código
 *
 * Estructura:
 * function nombreFuncion(parámetros) {
 *     // hacer algo
 *     return resultado; // Devuelve el resultado
 * }
 *
 * Usar: const resultado = nombreFuncion(valores);
 */

// EJEMPLO 1: Función que devuelve una suma
function sumar(a, b) {
  return a + b; // Devuelve el resultado
}

// Guardar el resultado en una variable
const suma1 = sumar(5, 3); // suma1 = 8
const suma2 = sumar(20, 10); // suma2 = 30

console.log("Suma 1: " + suma1); // Imprime: "Suma 1: 8"
console.log("Suma 2: " + suma2); // Imprime: "Suma 2: 30"

// Usar el return directamente
console.log(sumar(7, 8)); // Imprime: 15

// EJEMPLO 2: Función que devuelve si es mayor de edad
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

const persona1Adulta = esMayorDeEdad(25); // true
const persona2Adulta = esMayorDeEdad(15); // false

console.log("¿Persona 1 es adulta? " + persona1Adulta); // true
console.log("¿Persona 2 es adulta? " + persona2Adulta); // false

// Forma más corta (sin if-else):
function esMayorDeEdadSimple(edad) {
  return edad >= 18; // Devuelve true o false
}

// EJEMPLO 3: Función que devuelve texto
function obtenerCalificacion(nota) {
  if (nota >= 90) {
    return "Excelente";
  } else if (nota >= 80) {
    return "Muy bien";
  } else if (nota >= 70) {
    return "Bien";
  } else {
    return "Necesita mejorar";
  }
}

const calif1 = obtenerCalificacion(95); // "Excelente"
const calif2 = obtenerCalificacion(75); // "Bien"
const calif3 = obtenerCalificacion(60); // "Necesita mejorar"

console.log("Calificación 1: " + calif1);
console.log("Calificación 2: " + calif2);
console.log("Calificación 3: " + calif3);

// EJERCICIO 3: Función con return - Calcular descuento
// Crea una función "aplicarDescuento(precio, porcentaje)" que:
// - Reciba un precio y un porcentaje de descuento
// - Calcule el precio final (precio - (precio * porcentaje))
// - DEVUELVA el precio final
// Usa la función para:
// - Calcular un descuento del 20% a un producto de $100
// - Calcular un descuento del 10% a un producto de $50
// Imprime los resultados

console.log("========== EJERCICIO 3: Return con cálculo ==========");
// Tu código aquí
function aplicarDescuento(precio, porcentaje) {
  const descuento = precio * porcentaje;
  const precioFinal = precio - descuento;
  return precioFinal;
}

const precioConDescuento1 = aplicarDescuento(100, 0.20); // 80
const precioConDescuento2 = aplicarDescuento(50, 0.10); // 45

console.log("Precio con descuento 1: $" + precioConDescuento1);
console.log("Precio con descuento 2: $" + precioConDescuento2);

// ============================================
// FUNCIÓN CON RETURN Y CONDICIONALES
// ============================================

// EJEMPLO 1: Verificar si número es par
function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(4)); // true
console.log(esPar(7)); // false

// EJEMPLO 2: Encontrar el mayor entre dos números
function obtenerMayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  // O más corto: return a > b ? a : b;
}

console.log(obtenerMayor(10, 5)); // 10
console.log(obtenerMayor(3, 20)); // 20

// EJERCICIO 4: Función con return y condicional
// Crea una función "obtenerDiaSegun(numero)" que:
// - Reciba un número del 1-7
// - DEVUELVA el nombre del día ("Lunes", "Martes", etc)
// - Si el número no está entre 1-7, devuelve "Día inválido"
// Prueba con 3 números diferentes

console.log("========== EJERCICIO 4: Return con condicionales ==========");
// Tu código aquí
function obtenerDiaSegun(numero) {
  if (numero === 1) {
    return "Lunes";
  } else if (numero === 2) {
    return "Martes";
  } else if (numero === 3) {
    return "Miércoles";
  } else if (numero === 4) {
    return "Jueves";
  } else if (numero === 5) {
    return "Viernes";
  } else if (numero === 6) {
    return "Sábado";
  } else if (numero === 7) {
    return "Domingo";
  } else {
    return "Día inválido";
  }
}

console.log(obtenerDiaSegun(1)); // Lunes
console.log(obtenerDiaSegun(5)); // Viernes
console.log(obtenerDiaSegun(9)); // Día inválido

// ============================================
// FUNCIÓN CON ARRAYS COMO PARÁMETRO
// ============================================

/**
 * Puedes pasar arrays como parámetros
 * Dentro de la función puedes recorrerlos con for
 */

// EJEMPLO 1: Sumar todos los números de un array
function sumarArray(numeros) {
  let suma = 0;

  for (const numero of numeros) {
    suma += numero;
  }

  return suma;
}

const resultado1 = sumarArray([1, 2, 3, 4, 5]); // 15
const resultado2 = sumarArray([10, 20, 30]); // 60

console.log("Suma 1: " + resultado1);
console.log("Suma 2: " + resultado2);

// EJEMPLO 2: Encontrar el número mayor de un array
function encontrarMayor(numeros) {
  let mayor = numeros[0]; // Empezar con el primero

  for (const numero of numeros) {
    if (numero > mayor) {
      mayor = numero;
    }
  }

  return mayor;
}

console.log(encontrarMayor([5, 12, 3, 8, 1])); // 12
console.log(encontrarMayor([100, 50, 75])); // 100

// EJEMPLO 3: Contar cuántos números son pares
function contarPares(numeros) {
  let contador = 0;

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPares([1, 2, 3, 4, 5, 6])); // 3 (2, 4, 6)
console.log(contarPares([10, 15, 20, 25, 30])); // 3 (10, 20, 30)

// EJERCICIO 5: Función con array
// Crea una función "contarNumerosMayoresA(numeros, limite)" que:
// - Reciba un array de números y un número límite
// - Cuente cuántos números del array son mayores al límite
// - DEVUELVA la cantidad
// Prueba con:
// - Array [5, 15, 8, 22, 3, 18], límite 10
// - Array [1, 2, 3, 4, 5], límite 3

console.log("========== EJERCICIO 5: Función con array ==========");
// Tu código aquí
const array1 = [5, 15, 8, 22, 3, 18];
const limite1 = 10;

const array2 = [1, 2, 3, 4, 5];
const limite2 = 3;

function contarNumerosMayoresA(numeros, limite) {
  let contador = 0;

  for (const numero of numeros) {
    if (numero > limite) {
      contador++;
    }
  }

  return contador;
}

const resultadoArray1 = contarNumerosMayoresA(array1, limite1);
const resultadoArray2 = contarNumerosMayoresA(array2, limite2);
// ============================================
// FUNCIÓN CON OBJETO COMO PARÁMETRO
// ============================================

/**
 * También puedes pasar objetos como parámetros
 * Accedes a sus propiedades dentro de la función
 */

// EJEMPLO 1: Saludar a una persona
function saludarPersonaCompleta(persona) {
  // persona es un objeto con propiedades
  return (
    "Hola, mi nombre es " +
    persona.nombre +
    " y tengo " +
    persona.edad +
    " años"
  );
}

const persona1 = {
  nombre: "Carlos",
  edad: 30,
};

const persona2 = {
  nombre: "Ana",
  edad: 25,
};

console.log(saludarPersonaCompleta(persona1)); // "Hola, mi nombre es Carlos y tengo 30 años"
console.log(saludarPersonaCompleta(persona2)); // "Hola, mi nombre es Ana y tengo 25 años"

// EJEMPLO 2: Calcular el total de un producto
function calcularCostoPedido(pedido) {
  // pedido tiene: {cantidad, precioUnitario}
  return pedido.cantidad * pedido.precioUnitario;
}

const pedido1 = {
  cantidad: 3,
  precioUnitario: 50,
};

const pedido2 = {
  cantidad: 2,
  precioUnitario: 75,
};

console.log(calcularCostoPedido(pedido1)); // 150 (3 * 50)
console.log(calcularCostoPedido(pedido2)); // 150 (2 * 75)

// EJERCICIO 6: Función con objeto
// Crea una función "obtenerDescripcionLibro(libro)" que:
// - Reciba un objeto libro con: {titulo, autor, año}
// - DEVUELVA un string: "El libro [TITULO] fue escrito por [AUTOR] en [AÑO]"
// Crea 2 objetos diferentes y prueba la función

console.log("========== EJERCICIO 6: Función con objeto ==========");
// Tu código aquí
const libro1 = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  año: 1967,
};

const libro2 = {
  titulo: "1984",
  autor: "George Orwell",
  año: 1949,
};

function obtenerDescripcionLibro(libro) {
  return `El libro ${libro.titulo} fue escrito por ${libro.autor} en ${libro.año}`;
}

console.log(obtenerDescripcionLibro(libro1)); // "El libro Cien Años de Soledad fue escrito por Gabriel García Márquez en 1967"
console.log(obtenerDescripcionLibro(libro2)); // "El libro 1984 fue escrito por George Orwell en 1949"

// ============================================
// ARROW FUNCTIONS (Funciones flecha)
// ============================================

/**
 * Forma moderna de escribir funciones
 * Sintaxis: const nombreFuncion = (parámetros) => {
 *               // código
 *           };
 *
 * O si es muy corta: const suma = (a, b) => a + b;
 */

// EJEMPLO 1: Arrow function simple
const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(5, 3)); // 15

// EJEMPLO 2: Arrow function muy corta (sin llaves)
const restar = (a, b) => a - b;

console.log(restar(10, 3)); // 7

// EJEMPLO 3: Arrow function con un parámetro (paréntesis opcionales)
const elevarAlCuadrado = (numero) => numero * numero;
const elevarAlCuadrado2 = (numero) => numero * numero; // También válido

console.log(elevarAlCuadrado(5)); // 25

// EJERCICIO 7: Arrow functions
// Crea estas arrow functions:
// 1. "obtenerEdad" - recibe fecha de nacimiento (año), devuelve edad actual
//    Asume que el año actual es 2026
// 2. "esPositivo" - recibe un número, devuelve true si es > 0
// Usa ambas con al menos 2 ejemplos cada una

console.log("========== EJERCICIO 7: Arrow functions ==========");
// Tu código aquí
const obtenerEdad = (anioNacimiento) => 2026 - anioNacimiento;

console.log(obtenerEdad(1990)); // 36
console.log(obtenerEdad(2000)); // 26

const esPositivo = (numero) => numero > 0;

console.log(esPositivo(5)); // true
console.log(esPositivo(-3)); // false




// ============================================
// PARÁMETROS POR DEFECTO
// ============================================

/**
 * Puedes asignar valores por defecto a los parámetros
 * Se usan si no pasas ese parámetro
 */

// EJEMPLO 1: Parámetro con valor por defecto
function saludarConTono(nombre, tono = "amable") {
  return "Te saludo de forma " + tono + ", " + nombre;
}

console.log(saludarConTono("Carlos")); // Usa el valor por defecto "amable"
console.log(saludarConTono("María", "entusiasta")); // Sobrescribe el valor por defecto
console.log(saludarConTono("Juan", "formal")); // Sobrescribe el valor por defecto

// EJEMPLO 2: Múltiples parámetros por defecto
function crearPerfil(nombre, edad = 18, ciudad = "Madrid") {
  return nombre + " (" + edad + " años) de " + ciudad;
}

console.log(crearPerfil("Ana")); // Ana (18 años) de Madrid
console.log(crearPerfil("Luis", 25)); // Luis (25 años) de Madrid
console.log(crearPerfil("Rosa", 30, "Barcelona")); // Rosa (30 años) de Barcelona

// EJERCICIO 8: Parámetros por defecto
// Crea una función "crearProducto(nombre, precio = 10, stock = 5)" que:
// - Devuelva un string describiendo el producto
// - Formato: "[NOMBRE] - Precio: $[PRECIO], Stock: [STOCK]"
// Prueba con:
// - Solo nombre
// - Nombre y precio
// - Todos los parámetros

console.log("========== EJERCICIO 8: Parámetros por defecto ==========");
// Tu código aquí
function crearProducto(nombre, precio = 10, stock = 5) {
  return `${nombre} - Precio: $${precio}, Stock: ${stock}`;
}

console.log(crearProducto("Camiseta")); // Solo nombre
console.log(crearProducto("Pantalón", 20)); // Nombre y precio
console.log(crearProducto("Zapatos", 50, 10)); // Todos los parámetros

// ============================================
// FUNCIONES QUE LLAMAN OTRAS FUNCIONES
// ============================================

/**
 * Puedes llamar funciones dentro de otras funciones
 * Útil para reutilizar lógica
 */

// EJEMPLO 1: Funciones encadenadas
function obtenerPrecioFinal(precioBase, impuesto) {
  return precioBase + precioBase * impuesto;
}

function comprarProducto(nombre, precio, impuesto) {
  const precioFinal = obtenerPrecioFinal(precio, impuesto);
  return nombre + " cuesta $" + precioFinal;
}

console.log(comprarProducto("Laptop", 1000, 0.21)); // "Laptop cuesta $1210"
console.log(comprarProducto("Mouse", 25, 0.21)); // "Mouse cuesta $30.25"

// EJERCICIO 9: Funciones que llaman otras funciones
// Crea 2 funciones:
// 1. "calcularIMC(peso, altura)" - calcula y DEVUELVE el IMC
// 2. "obtenerCategoriaIMC(imc)" - recibe IMC, DEVUELVE categoría:
//    - Bajo peso: < 18.5
//    - Normal: 18.5-24.9
//    - Sobrepeso: 25-29.9
//    - Obeso: > 30
// 3. Crea una 3ª función "analizarPeso(peso, altura)" que:
//    - Calcula el IMC usando la primera función
//    - Obtiene la categoría usando la segunda función
//    - DEVUELVE un mensaje: "Tu IMC es X, categoría: Y"
// Prueba con 2 personas diferentes

console.log(
  "========== EJERCICIO 9: Funciones que llaman funciones ==========",
);
// Tu código aquí

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function obtenerCategoriaIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

function analizarPeso(peso, altura) {
  const imc = calcularIMC(peso, altura);
  const categoria = obtenerCategoriaIMC(imc);
  return `Tu IMC es ${imc.toFixed(2)}, categoría: ${categoria}`;
}

console.log(analizarPeso(70, 1.75)); // Persona 1
console.log(analizarPeso(90, 1.80)); // Persona 2
// ============================================
// RESUMEN
// ============================================

/**
 * TIPOS DE FUNCIONES:
 *
 * 1. Sin parámetros, sin return
 *    function saludar() { console.log("Hola"); }
 *
 * 2. Con parámetros, sin return
 *    function saludar(nombre) { console.log("Hola " + nombre); }
 *
 * 3. Sin parámetros, con return
 *    function obtenerEdad() { return 25; }
 *
 * 4. Con parámetros y con return
 *    function sumar(a, b) { return a + b; }
 *
 * 5. Arrow function
 *    const suma = (a, b) => a + b;
 *
 * BUENAS PRÁCTICAS:
 * - Nombres descriptivos para funciones
 * - Una función = una responsabilidad
 * - Documentar parámetros si es complejo
 * - Usar return en lugar de console.log (más flexible)
 */

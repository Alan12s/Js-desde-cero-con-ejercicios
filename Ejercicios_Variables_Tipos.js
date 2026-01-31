// ============================================
// EJERCICIOS: VARIABLES Y TIPOS DE DATOS EN JS
// ============================================

// ============================================
// NIVEL 1: BÁSICO
// ============================================

// EJERCICIO 1: Declara variables y prueba el tipo
// Declara 5 variables con diferentes tipos de datos
// Usa console.log() y typeof para verificar el tipo

console.log("========== EJERCICIO 1 ==========");
let numero = 42;
const texto = "Hola, mundo";
let booleano = true;
const decimal = 3.14;
let nulo = null;

console.log(numero, texto, booleano, decimal, nulo);

// EJERCICIO 2: Diferencia entre let y const
// Intenta modificar estas variables y observa qué pasa

console.log("========== EJERCICIO 2 ==========");
let variable1 = "Puedo cambiar";
 variable1 = "Cambié"; // Descomenta y prueba
 variable1 = 123; // También puedes cambiar el tipo

const constante1 = "No puedo cambiar";
 // constante1 = "Error"; // Descomenta para ver el error
// Parece que da un error de typeo por lo que entiendo: TypeError: Assignment to constant variable.

console.log(variable1);
console.log(constante1);

// EJERCICIO 3: Conversión de tipos
// Convierte un string a número y viceversa

console.log("========== EJERCICIO 3 ==========");
const numeroComoTexto = "42";
const numeroReal = Number(numeroComoTexto); // Convierte a número
const textoDelNumero = numeroReal.toString(); // Convierte a texto

//planteamento de variable como practicas
const numeroComoTexto2 = "100";
const numero3 = Number(numeroComoTexto2);
const texto3 = numero3.toString();
const otraConversion = String(numero3); //otra forma de convertir a texto
const otraConversion2 = parseInt(numeroComoTexto2); //otra forma de convertir a numero

console.log(typeof numeroComoTexto, numeroComoTexto);
console.log(typeof numeroReal, numeroReal);
console.log(typeof textoDelNumero, textoDelNumero);
console.log(typeof texto3, texto3); //variables mias
console.log(typeof otraConversion, otraConversion2);

// ============================================
// NIVEL 2: INTERMEDIO
// ============================================

// EJERCICIO 4: Operaciones con diferentes tipos
// ¿Qué pasa cuando sumas un número y un texto?

console.log("========== EJERCICIO 4 ==========");
console.log(5 + 3);        // Número + Número
console.log("5" + 3);      // String + Número
console.log(5 + "3");      // Número + String
console.log("Hola" + " " + "Mundo");  // Concatenación

console.log( "Hola esta es una operacion de prueba", 5 + 10, "3" * 2, "Estos operadores" + " son de JS", 5 * 2, "5" + 2, "10" / 2 ); //mis pruebas personales
// Es curioso que tome cosas como los strings y las multiplicaciones aunque no sean numeros, pero en las sumas los concatena como texto.:Hola esta es una operacion de prueba 15 6 Estos operadores son de JS 10 52, seria interesante conocer por que sucede eso con las multiplicaciones y no con las suma, lo mismo sucede para las divisioens al parecer.


// EJERCICIO 5: Operaciones matemáticas
// Realiza cálculos y guarda los resultados

console.log("========== EJERCICIO 5 ==========");
const precio = 19.99;
const cantidad = 3;
const total = precio * cantidad;
const impuesto = total * 0.21;
const totalConImpuesto = total + impuesto;

console.log("Precio:", precio);
console.log("Cantidad:", cantidad);
console.log("Total:", total);
console.log("Impuesto (21%):", impuesto);
console.log("Total con impuesto:", totalConImpuesto);

//Mis pruebas
const descuento = 5; // descuento fijo
const precio2 = 100; // precio original
const totalConDescuento = precio2 - descuento; // total con descuento aplicado
const porcentajeImpouesto = totalConDescuento * 0.21; // impuesto sobre el total con descuento

console.log("Precio original:", precio2);
console.log("Descuento:", descuento);
console.log("Total con descuento:", totalConDescuento);
console.log("Impuesto (21% sobre total con descuento):", porcentajeImpouesto);

// EJERCICIO 6: Booleanos y comparaciones
// Prueba diferentes comparaciones

console.log("========== EJERCICIO 6 ==========");
console.log(5 > 3);        // true
console.log(5 < 3);        // false
console.log(5 === 5);      // true (igualdad estricta)
console.log(5 == "5");     // true (igualdad flexible)
console.log(5 === "5");    // false (igualdad estricta)
console.log(true && false); // false (AND lógico)
console.log(true || false); // true (OR lógico)

//mis pruebas
console.log("Mis pruebas personales de comparaciones:");
// console.log(10 = 5); Error de sintaxis, operador de asignacion no de comparacion
console.log(10 != 5); //true
console.log(10 !== "10"); //true
console.log(10 === "10"); //false
console.log(10 >= 10); //true
console.log(10 <= 5); //false
console.log(false || false); //false
console.log(true && true); //true
console.log (5 && 10); //10
console.log (0 || "Hola"); //"Hola"

// ============================================
// NIVEL 3: AVANZADO
// ============================================

// EJERCICIO 7: Objetos (introducción)
// Los objetos guardan múltiples datos relacionados

console.log("========== EJERCICIO 7 ==========");
const persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Barcelona",
  esProgramador: true
};

console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);
console.log(typeof persona); // object
//mis pruebas

console.log("Mis pruebas personales con objetos:");
const poo = {
  lenguaje: "JavaScript",
  tipo: "Multiparadigma",
  esPopular: true,
  añoCreacion: 1995
}; //Esto en teoria sera lo mismo o mas cercano a la programacion orientada a objetos (POO) en JS
console.log(poo);
console.log(poo.lenguaje);
console.log(poo["tipo"]);
console.log(typeof poo); //object


// EJERCICIO 8: Arrays (listas)
// Los arrays guardan múltiples valores en orden

console.log("========== EJERCICIO 8 ==========");
const numeros = [1, 2, 3, 4, 5];
const colores = ["rojo", "verde", "azul"];
const mixto = [1, "texto", true, null, {nombre: "Juan"}];

console.log(numeros);
console.log(colores[0]);  // Acceder por índice
console.log(numeros.length); // Cantidad de elementos
console.log(typeof numeros); // object (en JS, los arrays son objetos)

//mis pruebas
console.log("Mis pruebas personales con arrays:");
const lenjuagesProgramacion = ["JavaScript", "Python", "Java", "php"];
const framworks = ["React", "laravel", "Vue"];
console.log(lenjuagesProgramacion);
console.log(framworks[1]); //laravel
console.log(lenjuagesProgramacion.length); //4
console.log(typeof lenjuagesProgramacion); //object
console.log(framworks);

// EJERCICIO 9: Null vs Undefined
// Entender la diferencia

console.log("========== EJERCICIO 9 ==========");
let variableUndefined;
let variableNull = null;

console.log(variableUndefined);  // undefined
console.log(variableNull);       // null
console.log(typeof variableUndefined);  // "undefined"
console.log(typeof variableNull);       // "object" (peculiaridad de JS)

//mis pruebas
let pruebaUndefined;
let pruebaNull = null;

console.log("Mis pruebas personales con null y undefined:");
console.log(pruebaUndefined);

const pruebaUndefined2 = undefined;
console.log(pruebaUndefined2);
const pruebaNull2 = null;
console.log(pruebaNull2);


// ============================================
// DESAFÍOS PRÁCTICOS
// ============================================

// DESAFÍO 1: Calcula el IMC (Índice de Masa Corporal)
// Fórmula: IMC = peso(kg) / altura(m)²

console.log("========== DESAFÍO 1: IMC ==========");
const peso = 70; // kg
const altura = 1.75; // metros
const imc = peso / (altura * altura);

console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log(`IMC: ${imc.toFixed(2)}`);


// DESAFÍO 2: Tienda de frutas
// Calcula el precio total de una compra

console.log("========== DESAFÍO 2: FRUTAS ==========");
const precioManzana = 0.50;
const precioPlátano = 0.30;
const preciaNaranja = 0.60;

const cantidadManzanas = 3;
const cantidadPlátanos = 2;
const cantidadNaranjas = 4;

const totalManzanas = precioManzana * cantidadManzanas;
const totalPlátanos = precioPlátano * cantidadPlátanos;
const totalNaranjas = preciaNaranja * cantidadNaranjas;
const totalCompra = totalManzanas + totalPlátanos + totalNaranjas;

console.log(`Manzanas: ${cantidadManzanas} × €${precioManzana} = €${totalManzanas}`);
console.log(`Plátanos: ${cantidadPlátanos} × €${precioPlátano} = €${totalPlátanos}`);
console.log(`Naranjas: ${cantidadNaranjas} × €${preciaNaranja} = €${totalNaranjas}`);
console.log(`Total: €${totalCompra.toFixed(2)}`);


// DESAFÍO 3: Información personal
// Crea un objeto con tu información

console.log("========== DESAFÍO 3: INFORMACIÓN PERSONAL ==========");
const miPerfil = {
  nombre: "Tu nombre",
  apellido: "Tu apellido",
  edad: 25,
  email: "tu@email.com",
  lenguajes: ["JavaScript", "HTML", "CSS"],
  ubicacion: {
    ciudad: "Madrid",
    país: "España"
  }
};

console.log(miPerfil);
console.log(`${miPerfil.nombre} es de ${miPerfil.ubicacion.ciudad}`);


// DESAFÍO 4: Conversión de temperaturas
// Convierte Celsius a Fahrenheit

console.log("========== DESAFÍO 4: TEMPERATURAS ==========");
const celsius = 20;
const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);


// DESAFÍO 5: Determina si un año es bisiesto

console.log("========== DESAFÍO 5: AÑO BISIESTO ==========");
const año = 2024;
const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);

console.log(`${año} es ${esBisiesto ? "bisiesto" : "no bisiesto"}`);


// ============================================
// TABLA DE REFERENCIA RÁPIDA
// ============================================

console.log("========== TABLA DE REFERENCIA ==========");
console.log("TIPOS DE DATOS EN JAVASCRIPT:");
console.log("- Number: 42, 3.14, -5");
console.log("- String: 'texto', \"otro\", `template`");
console.log("- Boolean: true, false");
console.log("- Null: null (sin valor intencional)");
console.log("- Undefined: undefined (sin definir)");
console.log("- Object: {}, [], new Date()");
console.log("- Symbol: Symbol()");
console.log("\nOPERADORES DE COMPARACIÓN:");
console.log("=== (igual estricto) vs == (igual flexible)");
console.log("!== (diferente estricto) vs != (diferente flexible)");
console.log("< > <= >=");

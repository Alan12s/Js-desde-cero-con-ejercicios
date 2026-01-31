// ============================================
// VARIABLES EN JAVASCRIPT
// ============================================

/**
 * VAR, LET y CONST - ¿Cuál usar y por qué?
 * 
 * - var: Obsoleto, tiene problemas de scope (alcance)
 * - let: Variable que PUEDE cambiar su valor
 * - const: Variable que NO puede cambiar su valor (constante)
 * 
 * BUENA PRÁCTICA: Usar siempre 'const' por defecto, 
 * solo usar 'let' cuando sepas que el valor cambiará
 */

// ❌ MAL - Usando var (evitar)
var nombreViejo = "Juan";

// ✅ BIEN - Usando const para valores que no cambiarán
const NOMBRE_EMPRESA = "TechCorp"; // Constantes en MAYÚSCULAS
const API_URL = "https://api.ejemplo.com";

// ✅ BIEN - Usando let para valores que cambiarán
let contadorUsuarios = 0;
let edadUsuario = 25;

/**
 * TIPOS DE DATOS PRIMITIVOS
 * Son los valores básicos del lenguaje
 */

// 1. STRING (Cadena de texto)
const nombre = "Carlos"; // Comillas dobles
const apellido = 'González'; // Comillas simples (ambas son válidas)
const mensaje = `Hola ${nombre}`; // Template literal - permite interpolar variables
console.log(mensaje); // Imprime: "Hola Carlos"

// 2. NUMBER (Número - tanto enteros como decimales)
const edad = 30; // Entero
const precio = 99.99; // Decimal
const temperatura = -5; // Negativo

// 3. BOOLEAN (Verdadero o Falso)
const esActivo = true; // Verdadero
const tieneLicencia = false; // Falso

// 4. UNDEFINED (Sin valor asignado)
let variableSinValor; // undefined - declarada pero no inicializada
console.log(variableSinValor); // undefined

// 5. NULL (Valor nulo intencionalmente)
const valorNulo = null; // Representa "sin valor" intencionalmente

// 6. SYMBOL (Identificador único) - Uso avanzado
const simbolo = Symbol('descripcion');

/**
 * TIPOS DE DATOS COMPUESTOS (Estructuras de datos)
 */

// 7. ARRAY (Arreglo/Lista ordenada)
const numeros = [1, 2, 3, 4, 5]; // Lista de números
const frutas = ["manzana", "pera", "uva"]; // Lista de strings
const mixto = [1, "texto", true, null]; // Puede mezclar tipos (no recomendado)

// 8. OBJECT (Objeto - colección de pares clave-valor)
const usuario = {
    nombre: "Ana",           // propiedad: valor
    edad: 28,
    email: "ana@email.com",
    esAdmin: false
};

/**
 * TYPEOF - Operador para verificar el tipo de dato
 * Útil para validaciones
 */
console.log(typeof nombre);      // "string"
console.log(typeof edad);        // "number"
console.log(typeof esActivo);    // "boolean"
console.log(typeof usuario);     // "object"
console.log(typeof numeros);     // "object" (los arrays también son objetos)
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (bug histórico de JavaScript)

// ============================================
// OPERADORES EN JAVASCRIPT
// ============================================

/**
 * OPERADORES ARITMÉTICOS
 * Realizan operaciones matemáticas
 */

const a = 10;
const b = 3;

const suma = a + b;           // 13 - Suma
const resta = a - b;          // 7  - Resta
const multiplicacion = a * b; // 30 - Multiplicación
const division = a / b;       // 3.333... - División
const modulo = a % b;         // 1  - Resto de la división (10 ÷ 3 = 3, resto 1)
const potencia = a ** b;      // 1000 - Exponenciación (10³)

// Incremento y Decremento
let contador = 5;
contador++;  // contador = contador + 1 → 6 (post-incremento)
contador--;  // contador = contador - 1 → 5 (post-decremento)
++contador;  // 6 (pre-incremento - incrementa antes de usar el valor)
--contador;  // 5 (pre-decremento)

/**
 * OPERADORES DE ASIGNACIÓN
 * Asignan y modifican valores
 */

let x = 10;    // Asignación simple
x += 5;        // x = x + 5  → 15
x -= 3;        // x = x - 3  → 12
x *= 2;        // x = x * 2  → 24
x /= 4;        // x = x / 4  → 6

/**
 * OPERADORES DE COMPARACIÓN
 * Comparan valores y retornan true o false
 */

const num1 = 10;
const num2 = "10"; // String que contiene "10"

// == (Igualdad débil - compara solo valor, convierte tipos)
console.log(num1 == num2);   // true (convierte "10" a número)

// === (Igualdad estricta - compara valor Y tipo)
console.log(num1 === num2);  // false (uno es number, otro string)

// BUENA PRÁCTICA: SIEMPRE usar === y !== para evitar conversiones inesperadas

console.log(num1 !== num2);  // true (diferentes tipos)
console.log(num1 > 5);       // true
console.log(num1 < 20);      // true
console.log(num1 >= 10);     // true
console.log(num1 <= 9);      // false

/**
 * OPERADORES LÓGICOS
 * Combinan expresiones booleanas
 */

const esAdulto = true;
const tieneLicencia = false;

// && (AND) - Retorna true solo si TODAS las condiciones son true
const puedeConducir = esAdulto && tieneLicencia; // false

// || (OR) - Retorna true si AL MENOS UNA condición es true
const puedeEntrar = esAdulto || tieneLicencia; // true

// ! (NOT) - Invierte el valor booleano
const esNiño = !esAdulto; // false

/**
 * OPERADOR TERNARIO
 * Atajo para if-else simple
 * Sintaxis: condición ? valorSiTrue : valorSiFalse
 */

const edad = 20;
const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"

// Equivale a:
let mensajeTradicional;
if (edad >= 18) {
    mensajeTradicional = "Eres mayor de edad";
} else {
    mensajeTradicional = "Eres menor de edad";
}

/**
 * OPERADORES DE NULLISH COALESCING
 * Operadores modernos para manejar valores nulos/indefinidos
 */

// ?? (Nullish Coalescing) - Retorna el segundo valor si el primero es null o undefined
const valorPorDefecto = null ?? "Valor predeterminado"; // "Valor predeterminado"
const valorExistente = "Hola" ?? "Default"; // "Hola"

// Nota: 0, false, "" NO se consideran nullish, solo null y undefined
const cero = 0 ?? 10; // 0 (no usa el valor por defecto)

// ?. (Optional Chaining) - Accede a propiedades sin error si el objeto es null/undefined
const persona = null;
const nombrePersona = persona?.nombre; // undefined (no lanza error)

// Sin optional chaining causaría error:
// const nombreError = persona.nombre; // ❌ Error: Cannot read property 'nombre' of null

// ============================================
// CONDICIONALES - IF, ELSE IF, ELSE
// ============================================

/**
 * IF - Ejecuta código solo si la condición es verdadera
 * 
 * Sintaxis:
 * if (condición) {
 *     // código a ejecutar si condición es true
 * }
 */

const edadPersona = 25;

if (edadPersona >= 18) {
    console.log("Eres mayor de edad");
}

/**
 * IF-ELSE - Ejecuta un bloque u otro dependiendo de la condición
 */

const temperatura = 15;

if (temperatura > 25) {
    console.log("Hace calor");
} else {
    console.log("Hace frío"); // Se ejecuta este bloque
}

/**
 * IF-ELSE IF-ELSE - Múltiples condiciones encadenadas
 * Se evalúan en orden, ejecuta el PRIMER bloque cuya condición sea true
 */

const nota = 85;

if (nota >= 90) {
    console.log("Excelente - A");
} else if (nota >= 80) {
    console.log("Muy bien - B"); // Se ejecuta este bloque
} else if (nota >= 70) {
    console.log("Bien - C");
} else if (nota >= 60) {
    console.log("Suficiente - D");
} else {
    console.log("Insuficiente - F");
}

/**
 * CONDICIONES COMPLEJAS
 * Combinando operadores lógicos
 */

const edad = 22;
const tieneLicencia = true;
const tieneSeguro = true;

// Múltiples condiciones con AND (&&)
if (edad >= 18 && tieneLicencia && tieneSeguro) {
    console.log("Puede conducir legalmente");
} else {
    console.log("No cumple los requisitos");
}

// Múltiples condiciones con OR (||)
const esAdmin = false;
const esModerador = true;

if (esAdmin || esModerador) {
    console.log("Tiene permisos de gestión"); // Se ejecuta
}

/**
 * SWITCH - Alternativa a múltiples if-else cuando comparamos UN valor
 * Más legible cuando hay muchos casos posibles
 * 
 * IMPORTANTE: Usar 'break' para evitar que continúe ejecutando los siguientes casos
 */

const diaSemana = 3;
let nombreDia;

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break; // Detiene la ejecución del switch
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles"; // Se ejecuta este caso
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
    case 7: // Múltiples casos pueden compartir código
        nombreDia = "Fin de semana";
        break;
    default: // Se ejecuta si ningún caso coincide
        nombreDia = "Día inválido";
}

console.log(nombreDia); // "Miércoles"

/**
 * BUENAS PRÁCTICAS CON CONDICIONALES
 */

// ✅ BIEN - Condiciones claras y positivas
const usuarioAutenticado = true;

if (usuarioAutenticado) {
    mostrarDashboard();
}

// ❌ EVITAR - Doble negación (confuso)
const noEstaDesautenticado = true;
if (!noEstaDesautenticado) { // Confuso de leer
    // código
}

// ✅ BIEN - Extraer condiciones complejas a variables con nombres descriptivos
const esClienteVIP = usuario.puntos > 1000 && usuario.antiguedad > 2;
const tieneDescuentoActivo = usuario.cupones.length > 0;

if (esClienteVIP && tieneDescuentoActivo) {
    aplicarDescuentoEspecial();
}

// ❌ EVITAR - Condiciones complejas sin contexto
if (usuario.puntos > 1000 && usuario.antiguedad > 2 && usuario.cupones.length > 0) {
    // ¿Por qué se aplica el descuento? No es claro
    aplicarDescuentoEspecial();
}

// ✅ BIEN - Return temprano para evitar anidación excesiva
function procesarPedido(pedido) {
    // Validaciones primero con return temprano
    if (!pedido) {
        return "Error: Pedido no existe";
    }
    
    if (pedido.items.length === 0) {
        return "Error: Pedido vacío";
    }
    
    if (pedido.total < 0) {
        return "Error: Total inválido";
    }
    
    // Lógica principal sin anidación excesiva
    procesarPago(pedido);
    return "Pedido procesado exitosamente";
}

// ============================================
// BUCLES - FOR, WHILE, DO-WHILE
// ============================================

/**
 * FOR - Bucle con contador conocido
 * Usado cuando sabes cuántas veces iterar
 * 
 * Sintaxis:
 * for (inicialización; condición; incremento) {
 *     // código a repetir
 * }
 */

// Ejemplo básico: Imprimir números del 1 al 5
for (let i = 1; i <= 5; i++) {
    // i = variable contador
    // i <= 5 = condición (mientras sea verdadera, continúa)
    // i++ = incrementa i en cada iteración
    console.log(`Número: ${i}`);
}
// Salida: Número: 1, Número: 2, Número: 3, Número: 4, Número: 5

/**
 * ITERANDO ARRAYS CON FOR
 * Patrón muy común para recorrer listas
 */

const frutas = ["manzana", "pera", "uva", "sandía"];

// Forma tradicional
for (let i = 0; i < frutas.length; i++) {
    // i empieza en 0 (primer índice de arrays)
    // i < frutas.length (mientras i sea menor que el tamaño del array)
    // frutas[i] accede al elemento en la posición i
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

/**
 * FOR...OF - Bucle moderno para iterar valores de arrays
 * Más limpio y legible que el for tradicional
 * RECOMENDADO para arrays cuando no necesitas el índice
 */

for (const fruta of frutas) {
    // 'fruta' es el valor actual en cada iteración
    console.log(`Me gusta la ${fruta}`);
}

/**
 * FOR...IN - Bucle para iterar propiedades de objetos
 * También funciona con arrays pero NO es recomendado para arrays
 */

const persona = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Desarrollador"
};

for (const propiedad in persona) {
    // 'propiedad' es el nombre de la clave
    // persona[propiedad] es el valor asociado
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
// Salida:
// nombre: Carlos
// edad: 30
// profesion: Desarrollador

/**
 * WHILE - Bucle que se ejecuta mientras una condición sea verdadera
 * Usado cuando NO sabes cuántas iteraciones necesitas
 */

let contador = 0;

while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++; // IMPORTANTE: incrementar para evitar bucle infinito
}

/**
 * Ejemplo práctico de WHILE: Validar entrada de usuario
 */

let intentos = 0;
const MAX_INTENTOS = 3;
let claveCorrecta = false;

while (intentos < MAX_INTENTOS && !claveCorrecta) {
    // Simula entrada de usuario
    const claveIngresada = obtenerClave(); // función hipotética
    
    if (claveIngresada === "1234") {
        claveCorrecta = true;
        console.log("Acceso concedido");
    } else {
        intentos++;
        console.log(`Clave incorrecta. Intentos restantes: ${MAX_INTENTOS - intentos}`);
    }
}

if (!claveCorrecta) {
    console.log("Cuenta bloqueada por múltiples intentos fallidos");
}

/**
 * DO-WHILE - Se ejecuta AL MENOS UNA VEZ, luego verifica la condición
 * Útil cuando necesitas ejecutar el código antes de validar
 */

let numero;

do {
    // Este código se ejecuta AL MENOS una vez
    numero = Math.floor(Math.random() * 10); // Genera número aleatorio 0-9
    console.log(`Número generado: ${numero}`);
} while (numero !== 5); // Continúa hasta que salga 5

console.log("¡Salió el 5!");

/**
 * BREAK - Rompe/sale del bucle inmediatamente
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }
    console.log(i); // Imprime: 0, 1, 2, 3, 4
}

/**
 * CONTINUE - Salta a la siguiente iteración
 */

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta los números pares
    }
    console.log(i); // Imprime solo impares: 1, 3, 5, 7, 9
}

/**
 * EJEMPLO PRÁCTICO: Buscar en un array
 */

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 75 }
];

const idBuscado = 2;
let productoEncontrado = null;

// Buscar producto por ID
for (const producto of productos) {
    if (producto.id === idBuscado) {
        productoEncontrado = producto;
        break; // Encontrado, no necesitamos seguir buscando
    }
}

if (productoEncontrado) {
    console.log(`Producto encontrado: ${productoEncontrado.nombre}`);
} else {
    console.log("Producto no encontrado");
}

/**
 * BUENAS PRÁCTICAS CON BUCLES
 */

// ✅ BIEN - Usar const en for...of cuando no modificas la variable
for (const item of array) {
    console.log(item);
}

// ✅ BIEN - Cachear la longitud del array si no cambia
const items = [1, 2, 3, 4, 5];
const longitud = items.length; // Calculado una sola vez

for (let i = 0; i < longitud; i++) {
    console.log(items[i]);
}

// ❌ EVITAR - Calcular length en cada iteración (ineficiente)
for (let i = 0; i < items.length; i++) { // length se calcula en cada iteración
    console.log(items[i]);
}

// ✅ BIEN - Nombres descriptivos para variables de bucle
for (let usuarioIndex = 0; usuarioIndex < usuarios.length; usuarioIndex++) {
    const usuario = usuarios[usuarioIndex];
    // Código...
}

// ❌ EVITAR - Bucles infinitos accidentales
// while (true) { // Sin condición de salida
//     console.log("Esto nunca termina"); 
// }
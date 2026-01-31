// ============================================
// DESAFÍOS PRÁCTICOS - SOLO INSTRUCCIONES
// ============================================
// En este archivo TÚ escribes el código
// Aquí solo hay comentarios explicando qué hacer
// ¡NO hay soluciones!

// ============================================
// DESAFÍO 1: CALCULA EL IMC
// ============================================
// 
// QUÉ HACER:
// 1. Crea una variable llamada "miPeso" con tu peso en kg (o cualquier número)
// 2. Crea una variable llamada "miAltura" con tu altura en metros (ej: 1.75)
// 3. Calcula el IMC usando la fórmula: peso / (altura × altura)
//    Guarda el resultado en una variable llamada "miIMC"
// 4. Muestra en consola:
//    - Tu peso
//    - Tu altura
//    - Tu IMC redondeado a 2 decimales (usa .toFixed(2))
//
// PISTA: Mira el ejercicio 5 de los intermedios, es parecido
//
// RESULTADO ESPERADO:
// Deberías ver algo como:
// Peso: 70 kg
// Altura: 1.75 m
// IMC: 22.86
//
// Escribe tu código aquí:

console.log("========== DESAFÍO 1: IMC ==========");
// Tu código aquí

const miPeso = 77;
const miAltura = 1.75;
const miIMC = miPeso / (miAltura * miAltura);

console.log("Peso:", miPeso + " kg");
console.log("Altura:", miAltura + " m");
console.log("Mi IMC seria:", miIMC.toFixed(2));

// ============================================
// DESAFÍO 2: PRECIO CON DESCUENTO
// ============================================
//
// QUÉ HACER:
// 1. Tienes un producto que cuesta €50
// 2. Te dan un descuento del 20%
// 3. Calcula:
//    - El monto del descuento (50 × 0.20)
//    - El precio final (50 - monto del descuento)
// 4. Muestra en consola:
//    - Precio original
//    - Descuento aplicado
//    - Precio final
//
// PISTA: Mira cómo hiciste el impuesto en el ejercicio 5
//        Esto es lo mismo pero restando en lugar de sumando
//
// RESULTADO ESPERADO:
// Precio original: €50
// Descuento (20%): €10
// Precio final: €40
//
// Escribe tu código aquí:

console.log("========== DESAFÍO 2: PRECIO CON DESCUENTO ==========");

const precioOriginal = 50;
const descuentoAplicado = precioOriginal * 0.20;
const precioFinal = precioOriginal - descuentoAplicado;

console.log("Precio original:", "€" + precioOriginal);
console.log("Descuento (20%):", "€" + descuentoAplicado);
console.log("Precio final:", "€" + precioFinal);

// ============================================
// DESAFÍO 3: INFORMACIÓN DE UN LIBRO
// ============================================
//
// QUÉ HACER:
// 1. Crea un objeto llamado "miLibro" con estas propiedades:
//    - titulo: el nombre del libro (ej: "Don Quijote")
//    - autor: quien lo escribió (ej: "Cervantes")
//    - año: año de publicación (ej: 1605)
//    - paginas: cantidad de páginas (ej: 752)
//    - idioma: en qué idioma está (ej: "Español")
// 2. Muestra en consola:
//    - El objeto completo
//    - Solo el título del libro
//    - Solo el autor
//    - Solo el año
// 3. Crea una frase que diga:
//    "El libro [TÍTULO] fue escrito por [AUTOR] en [AÑO]"
//
// PISTA: Recuerda cómo accediste a las propiedades en el ejercicio 7
//        Usa punto (.) o corchetes []
//
// RESULTADO ESPERADO:
// { titulo: "Don Quijote", autor: "Cervantes", año: 1605, paginas: 752, idioma: "Español" }
// Don Quijote
// Cervantes
// El libro Don Quijote fue escrito por Cervantes en 1605
//
// Escribe tu código aquí:

console.log("========== DESAFÍO 3: INFORMACIÓN DE UN LIBRO ==========");
// Tu código aquí
const miLibro = {
    titulo: "don quijote",
    autor: "Cervantes",
    año: 1605,
    paginas: 752,
    idioma: "Español"
};

console.log(miLibro);
console.log(miLibro.titulo);
console.log(miLibro.autor);
console.log(miLibro.año);
console.log(`El libro ${miLibro.titulo} fue escrito por ${miLibro.autor} en ${miLibro.año} en el idioma ${miLibro.idioma}.`);

// ============================================
// DESAFÍO 4: LISTA DE COMPRAS Y TOTAL
// ============================================
//
// QUÉ HACER:
// 1. Crea un array llamado "productos" con 4 artículos:
//    ["Leche", "Pan", "Huevos", "Queso"]
// 2. Crea un array llamado "precios" con los precios de cada uno:
//    [1.50, 2.00, 3.50, 5.00]
// 3. Calcula el total sumando todos los precios
// 4. Muestra en consola:
//    - Cada producto y su precio (ej: "Leche: €1.50")
//    - El total de la compra
//
// PISTA: Usa los índices para acceder a cada elemento
//        Accede así: array[0], array[1], etc
//
// RESULTADO ESPERADO:
// Leche: €1.50
// Pan: €2.00
// Huevos: €3.50
// Queso: €5.00
// Total: €12.00
//
// Escribe tu código aquí:

console.log("========== DESAFÍO 4: LISTA DE COMPRAS ==========");
// Tu código aquí
const productos = ["Leche", "Pan", "Huevos", "Queso"];
const precios = [1.50, 2.00, 3.50, 5.00];

let totalCompra = 0;

for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i]}: €${precios[i].toFixed(2)}`);
    totalCompra += precios[i];
}

console.log(`Total: €${totalCompra.toFixed(2)}`);

// ============================================
// DESAFÍO 5: COMPARACIONES Y BOOLEANOS
// ============================================
//
// QUÉ HACER:
// 1. Crea una variable "edad" con tu edad (ej: 25)
// 2. Crea comparaciones para saber si:
//    - Es mayor de 18 (usa >=)
//    - Es menor de 30 (usa <)
//    - Es exactamente 25 (usa ===)
//    - NO es 25 (usa !==)
// 3. Muestra cada comparación en consola con su resultado
//
// PISTA: Recuerda los operadores del ejercicio 6
//        Cada comparación da true o false
//
// RESULTADO ESPERADO (si tu edad es 25):
// ¿Eres mayor de 18?: true
// ¿Eres menor de 30?: true
// ¿Tienes exactamente 25 años?: true
// ¿NO tienes 25 años?: false
//
// Escribe tu código aquí:

console.log("========== DESAFÍO 5: COMPARACIONES ==========");
// Tu código aquí
const edad = 25;

const mayorDe18 = edad >= 18;
const menorDe30 = edad < 30;
const exactamente25 = edad === 25;
const noEs25 = edad !== 25;

console.log("¿Eres mayor de 18?:", mayorDe18);
console.log("¿Eres menor de 30?:", menorDe30);
console.log("¿Tienes exactamente 25 años?:", exactamente25);
console.log("¿NO tienes 25 años?:", noEs25);


// ============================================
// DESAFÍO 6: CONVERSIÓN DE UNIDADES
// ============================================
//
// QUÉ HACER:
// 1. Tienes 5 metros que quieres convertir a:
//    - Centímetros (1 metro = 100 cm)
//    - Kilómetros (1 metro = 0.001 km)
//    - Pies (1 metro = 3.28084 pies) [solo como práctica de decimales]
// 2. Guarda cada resultado en una variable
// 3. Muestra en consola todos los resultados con labels claros
//
// PISTA: Solo es multiplicación/división
//
// RESULTADO ESPERADO:
// 5 metros = 500 centímetros
// 5 metros = 0.005 kilómetros
// 5 metros = 16.40 pies
//
// Escribe tu código aquí:

console.log("========== DESAFÍO 6: CONVERSIÓN DE UNIDADES ==========");
// Tu código aquí
const metros = 5;
const centimetros = metros * 100;
const kilometros = metros * 0.001;
const pies = metros * 3.28084;

console.log(`${metros} metros = ${centimetros} centímetros`);
console.log(`${metros} metros = ${kilometros.toFixed(3)} kilómetros`);
console.log(`${metros} metros = ${pies.toFixed(2)} pies`);

// ============================================
// DESAFÍO EXTRA: INFORMACIÓN PERSONAL
// ============================================
//
// QUÉ HACER:
// Crea un objeto llamado "miPerfil" que contenga:
// - nombre: tu nombre
// - apellido: tu apellido
// - edad: tu edad
// - hobbies: un array con 3 cosas que te gustan
// - ciudad: tu ciudad
// - esEstudiante: true o false
//
// Luego muestra:
// - El objeto completo
// - Tu nombre
// - Tu primer hobby
// - Una frase: "[NOMBRE] es de [CIUDAD] y tiene [EDAD] años"
//
// PISTA: Combina objetos y arrays como hiciste en los ejercicios 7 y 8
//
// Escribe tu código aquí:

console.log("========== DESAFÍO EXTRA: MI PERFIL ==========");
// Tu código aquí
const miPerfil = {
    nombre: "Alan",
    apellido: "Rodriguez",
    edad: 22,
    hobbies: ["Leer", "Programar", "Jugar"],
    ciudad: "San juan",
    esEstudiante: false
};

console.log(miPerfil);
console.log("Mi nombre es:", miPerfil.nombre);
console.log("Mi primer hobby es:", miPerfil.hobbies[0]);
console.log(`${miPerfil.nombre} es de ${miPerfil.ciudad} y tiene ${miPerfil.edad} años`);
// ============================================
// MANEJO DE ERRORES - TRY, CATCH, FINALLY
// ============================================

/**
 * A veces el código genera ERRORES
 * try-catch permite manejar esos errores sin que el programa falle
 *
 * ANALOGÍA:
 * "Intenta hacer X (try)
 *  Si falla, haz Y en su lugar (catch)
 *  Después, haz Z pase lo que pase (finally)"
 */

// ============================================
// TRY-CATCH BÁSICO
// ============================================

/**
 * Estructura:
 * try {
 *     // código que PUEDE fallar
 * } catch (error) {
 *     // código que se ejecuta SI hay error
 * }
 */

// EJEMPLO 1: Acceder a propiedad que no existe
console.log("========== EJEMPLO TRY-CATCH ==========");

try {
  const objeto = { nombre: "Juan" };
  console.log(objeto.nombre); // "Juan" - OK
  console.log(objeto.edad); // undefined - No falla, pero puede causar problemas
  console.log(objeto.edad.valor); // ERROR - No puede acceder a .valor de undefined
} catch (error) {
  console.log("Capturé un error:", error.message);
}

console.log("El programa continúa funcionando"); // Se ejecuta aunque haya error

// EJEMPLO 2: Convertir string a número
try {
  const numero = parseInt("abc"); // NaN, no lanza error pero es un problema
  if (isNaN(numero)) {
    throw new Error("El valor no es un número válido"); // Forzar error
  }
  console.log("Número válido:", numero);
} catch (error) {
  console.log("Error capturado:", error.message);
}

// EJEMPLO 3: Array con índice inválido
try {
  const array = [1, 2, 3];
  console.log(array[0]); // 1 - OK
  console.log(array[10]); // undefined - No falla
  const valor = array[10];
  console.log(valor.toFixed(2)); // ERROR - undefined no tiene método toFixed
} catch (error) {
  console.log("Hubo un error:", error.message);
}

// EJERCICIO 1: TRY-CATCH
// Crea un try-catch que:
// 1. Intente dividir 100 entre un número (recibido como parámetro)
// 2. Si el número es 0, lanza un error: "No se puede dividir entre 0"
// 3. En el catch, muestra el mensaje del error
// Prueba con: 5 (debe funcionar) y 0 (debe mostrar error)

console.log("========== EJERCICIO 1: TRY-CATCH ==========");
// Tu código aquí

// ============================================
// THROW - Lanzar errores manualmente
// ============================================

/**
 * throw permite crear un error manualmente
 * Sintaxis: throw new Error("mensaje del error");
 */

// EJEMPLO 1: Validar edad
function puedeVotar(edad) {
  try {
    if (edad < 0) {
      throw new Error("La edad no puede ser negativa");
    }
    if (edad < 18) {
      throw new Error("Debes tener al menos 18 años para votar");
    }
    return "Puedes votar";
  } catch (error) {
    return "Error: " + error.message;
  }
}

console.log(puedeVotar(25)); // "Puedes votar"
console.log(puedeVotar(15)); // "Error: Debes tener al menos 18 años para votar"
console.log(puedeVotar(-5)); // "Error: La edad no puede ser negativa"

// EJEMPLO 2: Validar parámetro de función
function obtenerElementoArray(array, indice) {
  try {
    if (!Array.isArray(array)) {
      throw new Error("El primer parámetro debe ser un array");
    }
    if (indice < 0 || indice >= array.length) {
      throw new Error("Índice fuera de rango");
    }
    return array[indice];
  } catch (error) {
    return "Error: " + error.message;
  }
}

console.log(obtenerElementoArray([1, 2, 3], 1)); // 2
console.log(obtenerElementoArray([1, 2, 3], 10)); // "Error: Índice fuera de rango"
console.log(obtenerElementoArray("no es array", 0)); // "Error: El primer parámetro debe ser un array"

// EJERCICIO 2: THROW
// Crea una función "calcularDescuento(precio, porcentaje)" que:
// - Si precio < 0, lanza error: "El precio no puede ser negativo"
// - Si porcentaje < 0 o > 100, lanza error: "El porcentaje debe estar entre 0 y 100"
// - Calcula y devuelve el precio con descuento
// Prueba con valores válidos e inválidos

console.log("========== EJERCICIO 2: THROW ==========");
// Tu código aquí

// ============================================
// FINALLY - Se ejecuta siempre
// ============================================

/**
 * finally se ejecuta INDEPENDIENTEMENTE si hay error o no
 * Útil para limpiar recursos, cerrar conexiones, etc
 */

// EJEMPLO 1: Finally siempre se ejecuta
console.log("\n========== EJEMPLO FINALLY ==========");

try {
  console.log("Intentando algo...");
  throw new Error("Algo salió mal");
  console.log("Esto NO se ejecuta");
} catch (error) {
  console.log("Error capturado:", error.message);
} finally {
  console.log("Finally: Se ejecuta SIEMPRE"); // Se ejecuta sí o sí
}

// EJEMPLO 2: Finally sin error
console.log("\n========== EJEMPLO FINALLY SIN ERROR ==========");

try {
  console.log("Todo va bien");
  const resultado = 5 + 3;
  console.log("Resultado:", resultado);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Finally: Limpiando recursos..."); // Se ejecuta igualmente
}

// EJERCICIO 3: FINALLY
// Crea un try-catch-finally que:
// - Try: intente acceder a propiedad de un objeto null (error)
// - Catch: capture el error
// - Finally: imprima "Operación finalizada"

console.log("========== EJERCICIO 3: FINALLY ==========");
// Tu código aquí

// ============================================
// PROMESAS - Introducción
// ============================================

/**
 * Una promesa representa una operación que ocurrirá en el futuro
 *
 * Estados:
 * - Pending (pendiente): La operación está en progreso
 * - Fulfilled (cumplida): La operación fue exitosa
 * - Rejected (rechazada): La operación falló
 *
 * ANALOGÍA:
 * "Prometo traer un café en 2 segundos"
 * - Ahora: estoy en proceso (pending)
 * - Dentro de 2 segundos: lo traigo (fulfilled)
 * - O no puedo traerlo (rejected)
 */

// EJEMPLO 1: Crear una promesa simple
console.log("\n========== EJEMPLO PROMESA ==========");

const miPromesa = new Promise((resolve, reject) => {
  // resolve = si todo va bien
  // reject = si algo falla

  setTimeout(() => {
    resolve("Operación completada");
  }, 1000); // Después de 1 segundo
});

// Esperar a que la promesa se cumpla
miPromesa
  .then((resultado) => {
    console.log(resultado); // "Operación completada"
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// EJERCICIO 4: PROMESA
// Crea una promesa que:
// - Simule una operación que tarda 2 segundos
// - Luego devuelva "Proceso completado"
// Usa .then() para mostrar el resultado
// (Nota: Verás el resultado después de 2 segundos)

console.log("========== EJERCICIO 4: PROMESA ==========");
// Tu código aquí

// ============================================
// ASYNC/AWAIT - Forma moderna de usar promesas
// ============================================

/**
 * async/await permite escribir código asincrónico como si fuera sincrónico
 * Es más fácil de leer que .then()
 *
 * - async: declara que una función es asincrónica
 * - await: espera a que se cumpla una promesa
 */

// EJEMPLO 1: Función async simple
async function saludar() {
  return "Hola"; // Devuelve automáticamente una promesa
}

// Usar la función async
saludar().then((resultado) => {
  console.log(resultado); // "Hola"
});

// EJEMPLO 2: async/await
console.log("\n========== EJEMPLO ASYNC/AWAIT ==========");

async function esperarYSaludar() {
  console.log("Esperando...");

  // Simular espera de 1 segundo
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  console.log("¡Operación completada!");
}

// Llamar función async
esperarYSaludar();

// EJEMPLO 3: async/await con error handling
async function obtenerDatos() {
  try {
    console.log("Obteniendo datos...");

    // Simular obtención de datos
    const datos = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, nombre: "Juan" });
      }, 1000);
    });

    console.log("Datos obtenidos:", datos);
    return datos;
  } catch (error) {
    console.log("Error al obtener datos:", error);
  }
}

// Llamar función async
obtenerDatos();

// EJERCICIO 5: ASYNC/AWAIT
// Crea una función async "procesar()" que:
// - Espere 2 segundos
// - Imprime "Procesando..."
// - Luego imprime "Proceso completado"
// Nota: Deberías ver los mensajes con 2 segundos de diferencia

console.log("========== EJERCICIO 5: ASYNC/AWAIT ==========");
// Tu código aquí

// ============================================
// RESUMEN
// ============================================

/**
 * TRY-CATCH:
 * - try: código que PUEDE fallar
 * - catch: se ejecuta si hay error
 * - finally: se ejecuta SIEMPRE
 * - throw: lanza error manualmente
 *
 * PROMESAS:
 * - Representan operaciones futuras
 * - Estados: pending, fulfilled, rejected
 * - .then(): cuando se cumple
 * - .catch(): cuando falla
 *
 * ASYNC/AWAIT:
 * - async: función asincrónica
 * - await: espera a que se cumpla
 * - Más legible que .then()
 * - Combinar con try-catch para manejo de errores
 */

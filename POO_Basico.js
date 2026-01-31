// ============================================
// PROGRAMACIÓN ORIENTADA A OBJETOS (POO) BÁSICA
// ============================================

/**
 * POO es una forma de organizar código usando OBJETOS
 * Los objetos agrupan datos (propiedades) y funciones (métodos)
 * 
 * ANALOGÍA:
 * Un Coche es un objeto que tiene:
 * - Propiedades: marca, modelo, color, velocidad
 * - Métodos: acelerar(), frenar(), girar()
 */

// ============================================
// CLASES - Forma moderna de POO
// ============================================

/**
 * Una clase es un MOLDE para crear objetos
 * 
 * Estructura:
 * class NombreClase {
 *     constructor(parámetros) {
 *         // Inicializar propiedades
 *     }
 *     
 *     método() {
 *         // Código del método
 *     }
 * }
 * 
 * Usar: const objeto = new NombreClase(parámetros);
 */

// EJEMPLO 1: Clase Persona
console.log("========== EJEMPLO CLASE PERSONA ==========");

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; // this.propiedad = parámetro
        this.edad = edad;
    }
    
    saludar() {
        return "Hola, me llamo " + this.nombre;
    }
    
    cumplirAño() {
        this.edad = this.edad + 1;
        return this.nombre + " ahora tiene " + this.edad + " años";
    }
}

// Crear objetos (instancias) de la clase
const persona1 = new Persona("Carlos", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1.nombre);        // "Carlos"
console.log(persona1.edad);          // 30
console.log(persona1.saludar());     // "Hola, me llamo Carlos"
console.log(persona1.cumplirAño()); // "Carlos ahora tiene 31 años"

console.log(persona2.nombre);        // "Ana"
console.log(persona2.saludar());     // "Hola, me llamo Ana"

// EJEMPLO 2: Clase Producto
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
    comprar(cantidad) {
        if (cantidad > this.stock) {
            return "No hay suficiente stock";
        }
        this.stock = this.stock - cantidad;
        const total = precio * cantidad;
        return "Compra exitosa. Total: $" + total;
    }
    
    mostrarInfo() {
        return this.nombre + " - $" + this.precio + " - Stock: " + this.stock;
    }
}

// Crear productos
const laptop = new Producto("Laptop", 1000, 5);
const mouse = new Producto("Mouse", 25, 50);

console.log(laptop.mostrarInfo()); // "Laptop - $1000 - Stock: 5"
console.log(mouse.mostrarInfo());  // "Mouse - $25 - Stock: 50"

// EJERCICIO 1: CLASE BÁSICA
// Crea una clase "Libro" con:
// - constructor(titulo, autor, paginas)
// - método: obtenerInfo() que devuelva "[TÍTULO] por [AUTOR] ([PAGINAS] páginas)"
// Crea 2 libros y muestra su información

console.log("========== EJERCICIO 1: CLASE BÁSICA ==========");
// Tu código aquí


// ============================================
// PROPIEDADES Y MÉTODOS
// ============================================

/**
 * Propiedades: variables que guardan datos
 * Métodos: funciones que realiza el objeto
 * 
 * this.propiedad = acceder a propiedad del objeto
 * this.método() = llamar método del objeto
 */

// EJEMPLO 1: Clase Coche con propiedades y métodos
console.log("\n========== EJEMPLO CLASE COCHE ==========");

class Coche {
    constructor(marca, modelo, velocidadActual = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = velocidadActual;
    }
    
    acelerar(cantidad) {
        this.velocidadActual = this.velocidadActual + cantidad;
        return this.marca + " aceleró. Velocidad: " + this.velocidadActual + " km/h";
    }
    
    frenar(cantidad) {
        this.velocidadActual = Math.max(0, this.velocidadActual - cantidad);
        return this.marca + " frenó. Velocidad: " + this.velocidadActual + " km/h";
    }
    
    obtenerEstado() {
        return this.marca + " " + this.modelo + " - Velocidad: " + 
               this.velocidadActual + " km/h";
    }
}

const miCoche = new Coche("Toyota", "Corolla");

console.log(miCoche.obtenerEstado());      // "Toyota Corolla - Velocidad: 0 km/h"
console.log(miCoche.acelerar(50));         // "Toyota aceleró. Velocidad: 50 km/h"
console.log(miCoche.acelerar(30));         // "Toyota aceleró. Velocidad: 80 km/h"
console.log(miCoche.frenar(20));           // "Toyota frenó. Velocidad: 60 km/h"
console.log(miCoche.obtenerEstado());      // "Toyota Corolla - Velocidad: 60 km/h"

// EJERCICIO 2: PROPIEDADES Y MÉTODOS
// Crea una clase "CuentaBancaria" con:
// - constructor(titular, saldo)
// - método depositar(cantidad) - aumenta saldo
// - método retirar(cantidad) - disminuye saldo (validar que no sea más que disponible)
// - método obtenerSaldo() - devuelve el saldo actual
// Crea una cuenta, deposita, retira y muestra saldo

console.log("========== EJERCICIO 2: PROPIEDADES Y MÉTODOS ==========");
// Tu código aquí


// ============================================
// HERENCIA - Clases que heredan de otras
// ============================================

/**
 * La herencia permite que una clase HEREDE propiedades y métodos de otra
 * Reutiliza código evitando repetición
 * 
 * Sintaxis: class Hija extends Padre {
 *     // Código específico de la hija
 * }
 */

// EJEMPLO 1: Herencia simple
console.log("\n========== EJEMPLO HERENCIA ==========");

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacerSonido() {
        return this.nombre + " hace un sonido";
    }
}

// Perro hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);           // Llamar constructor de la clase padre
        this.raza = raza;
    }
    
    hacerSonido() {
        return this.nombre + " ladra: ¡Guau guau!"; // Sobrescribe el método
    }
    
    traerPelota() {
        return this.nombre + " trajo la pelota";
    }
}

// Gato hereda de Animal
class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre);
        this.color = color;
    }
    
    hacerSonido() {
        return this.nombre + " maúlla: ¡Miau!"; // Sobrescribe
    }
    
    rasguñar() {
        return this.nombre + " está rasguñando";
    }
}

const perro = new Perro("Rex", "Labrador");
const gato = new Gato("Misu", "Blanco");

console.log(perro.hacerSonido());  // "Rex ladra: ¡Guau guau!"
console.log(perro.traerPelota());  // "Rex trajo la pelota"

console.log(gato.hacerSonido());   // "Misu maúlla: ¡Miau!"
console.log(gato.rasguñar());      // "Misu está rasguñando"

// EJEMPLO 2: Herencia con más complejidad
console.log("\n========== EJEMPLO HERENCIA 2 ==========");

class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    
    trabajar() {
        return this.nombre + " está trabajando";
    }
    
    obtenerInfo() {
        return this.nombre + " - Salario: $" + this.salario;
    }
}

// Gerente hereda de Empleado
class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
    
    supervisar() {
        return this.nombre + " está supervisando el departamento de " + this.departamento;
    }
    
    obtenerInfo() {
        return super.obtenerInfo() + " - Departamento: " + this.departamento;
    }
}

const gerente = new Gerente("Carlos", 5000, "Desarrollo");

console.log(gerente.trabajar());    // "Carlos está trabajando"
console.log(gerente.supervisar());  // "Carlos está supervisando..."
console.log(gerente.obtenerInfo()); // "Carlos - Salario: $5000 - Departamento: Desarrollo"

// EJERCICIO 3: HERENCIA
// Crea clases:
// 1. Vehículo (clase base)
//    - constructor(marca, velocidadMax)
//    - método: acelerar() - devuelve "[MARCA] está acelerando"
// 2. Auto (hereda de Vehículo)
//    - constructor(marca, velocidadMax, numPuertas)
//    - método: abrirPuertas() - devuelve "Las [PUERTAS] puertas se abrieron"
// 3. Moto (hereda de Vehículo)
//    - constructor(marca, velocidadMax, tipoCombustible)
//    - método: caballito() - devuelve "[MARCA] está haciendo un caballito"
// Crea una instancia de cada y usa sus métodos

console.log("========== EJERCICIO 3: HERENCIA ==========");
// Tu código aquí


// ============================================
// ENCAPSULACIÓN - Propiedades privadas
// ============================================

/**
 * A veces quieres que ciertas propiedades NO se accedan directamente
 * Las propiedades privadas (con #) solo se usan dentro de la clase
 * 
 * Sintaxis: #nombrePropiedad
 */

// EJEMPLO 1: Propiedades privadas
console.log("\n========== EJEMPLO ENCAPSULACIÓN ==========");

class CuentaBancaria2 {
    #saldo; // Propiedad privada
    
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo = this.#saldo + cantidad;
            return "Depósito de $" + cantidad + " realizado";
        }
        return "Cantidad inválida";
    }
    
    obtenerSaldo() {
        return this.#saldo; // Se puede acceder dentro de la clase
    }
}

const cuenta = new CuentaBancaria2("Juan", 1000);

console.log(cuenta.depositar(500));  // "Depósito de $500 realizado"
console.log(cuenta.obtenerSaldo());  // 1500
// console.log(cuenta.#saldo); // ERROR - No se puede acceder propiedades privadas

// EJERCICIO 4: ENCAPSULACIÓN
// Crea una clase "Contraseña" con:
// - #contraseña (privada) - guarda la contraseña
// - establecerContraseña(nueva) - cambia la contraseña
// - verificarContraseña(intento) - devuelve true/false si coincide
// No puedas acceder directamente a #contraseña desde fuera

console.log("========== EJERCICIO 4: ENCAPSULACIÓN ==========");
// Tu código aquí


// ============================================
// RESUMEN DE POO
// ============================================

/**
 * CLASE: Molde para crear objetos
 * - constructor: inicializa propiedades
 * - propiedades: datos del objeto
 * - métodos: funciones del objeto
 * - this: referencia al objeto actual
 * 
 * HERENCIA: Reutilizar código
 * - extends: hereda de otra clase
 * - super(): llamar constructor padre
 * - Sobrescribir métodos: redefinir en clase hija
 * 
 * ENCAPSULACIÓN: Control de acceso
 * - #propiedad: privada (solo dentro de la clase)
 * - métodos públicos: accesibles desde fuera
 * 
 * BENEFICIOS:
 * - Organizar código
 * - Reutilizar código (herencia)
 * - Proteger datos (encapsulación)
 * - Código más mantenible
 */

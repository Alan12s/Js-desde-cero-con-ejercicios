// ============================================
// PRUEBA TÉCNICA DE EJEMPLO - SOLUCIÓN COMPLETA
// ============================================
// 
// PROBLEMA:
// Desarrollar un sistema para gestionar un inventario de productos.
// 
// REQUISITOS:
// 1. Crear una clase Producto
// 2. Crear una clase Inventario que gestione productos
// 3. Métodos necesarios:
//    - agregarProducto(nombre, precio, stock)
//    - obtenerProducto(id)
//    - actualizarStock(id, nuevaCantidad)
//    - venderProducto(id, cantidad)
//    - obtenerProductosMasCaros(cantidad) - Top productos por precio
//    - obtenerProductosPorRango(min, max) - Filtrar por precio
//    - reporteInventario() - Mostrar estado general
// 4. Validaciones en cada operación
// 5. Manejo de errores

// ============================================
// SOLUCIÓN
// ============================================

/**
 * Clase Producto
 * Representa un producto individual en el inventario
 */
class Producto {
    static idContador = 1; // Contador global para IDs únicos

    constructor(nombre, precio, stock) {
        // Validaciones
        if (!nombre || nombre.trim() === "") {
            throw new Error("El nombre del producto es obligatorio");
        }
        if (precio <= 0) {
            throw new Error("El precio debe ser mayor a 0");
        }
        if (stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }

        this.id = Producto.idContador++;
        this.nombre = nombre.trim();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.fechaCreacion = new Date();
    }

    /**
     * Obtiene información del producto
     */
    obtenerInfo() {
        return {
            id: this.id,
            nombre: this.nombre,
            precio: this.precio,
            stock: this.stock,
            fechaCreacion: this.fechaCreacion
        };
    }

    /**
     * Verifica si hay suficiente stock
     */
    tieneStock(cantidad) {
        return this.stock >= cantidad;
    }

    /**
     * Reduce el stock
     */
    reducirStock(cantidad) {
        if (!this.tieneStock(cantidad)) {
            throw new Error(`Stock insuficiente. Disponible: ${this.stock}`);
        }
        this.stock -= cantidad;
    }

    /**
     * Aumenta el stock
     */
    aumentarStock(cantidad) {
        if (cantidad <= 0) {
            throw new Error("La cantidad a aumentar debe ser positiva");
        }
        this.stock += cantidad;
    }
}

/**
 * Clase Inventario
 * Gestiona la colección de productos
 */
class Inventario {
    constructor(nombre = "Inventario General") {
        this.nombre = nombre;
        this.productos = [];
    }

    /**
     * Agregar un producto al inventario
     */
    agregarProducto(nombre, precio, stock) {
        try {
            const producto = new Producto(nombre, precio, stock);
            this.productos.push(producto);
            return {
                exito: true,
                mensaje: `Producto "${nombre}" agregado con ID: ${producto.id}`,
                productoId: producto.id
            };
        } catch (error) {
            return {
                exito: false,
                mensaje: `Error al agregar producto: ${error.message}`
            };
        }
    }

    /**
     * Obtener un producto por ID
     */
    obtenerProducto(id) {
        const producto = this.productos.find(p => p.id === id);
        
        if (!producto) {
            throw new Error(`Producto con ID ${id} no encontrado`);
        }
        
        return producto;
    }

    /**
     * Actualizar el stock de un producto
     */
    actualizarStock(id, nuevaCantidad) {
        try {
            const producto = this.obtenerProducto(id);
            
            if (nuevaCantidad < 0) {
                throw new Error("El stock no puede ser negativo");
            }

            const diferencia = nuevaCantidad - producto.stock;
            
            if (diferencia > 0) {
                producto.aumentarStock(diferencia);
            } else if (diferencia < 0) {
                producto.reducirStock(Math.abs(diferencia));
            }

            return {
                exito: true,
                mensaje: `Stock actualizado. Nuevo stock: ${producto.stock}`
            };
        } catch (error) {
            return {
                exito: false,
                mensaje: `Error: ${error.message}`
            };
        }
    }

    /**
     * Vender un producto (reduce stock)
     */
    venderProducto(id, cantidad) {
        try {
            if (cantidad <= 0) {
                throw new Error("La cantidad a vender debe ser positiva");
            }

            const producto = this.obtenerProducto(id);
            producto.reducirStock(cantidad);

            const total = producto.precio * cantidad;
            
            return {
                exito: true,
                mensaje: `Venta exitosa de ${cantidad} unidades`,
                productoNombre: producto.nombre,
                totalVenta: total,
                stockRestante: producto.stock
            };
        } catch (error) {
            return {
                exito: false,
                mensaje: `Error: ${error.message}`
            };
        }
    }

    /**
     * Obtener los productos más caros
     */
    obtenerProductosMasCaros(cantidad = 5) {
        return this.productos
            .sort((a, b) => b.precio - a.precio)
            .slice(0, cantidad)
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                precio: p.precio,
                stock: p.stock
            }));
    }

    /**
     * Filtrar productos por rango de precio
     */
    obtenerProductosPorRango(minPrecio, maxPrecio) {
        if (minPrecio < 0 || maxPrecio < 0 || minPrecio > maxPrecio) {
            throw new Error("Rango de precios inválido");
        }

        return this.productos
            .filter(p => p.precio >= minPrecio && p.precio <= maxPrecio)
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                precio: p.precio,
                stock: p.stock
            }))
            .sort((a, b) => a.precio - b.precio);
    }

    /**
     * Obtener productos con bajo stock
     */
    obtenerProductosBajoStock(minimo = 10) {
        return this.productos
            .filter(p => p.stock <= minimo)
            .sort((a, b) => a.stock - b.stock)
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                stock: p.stock,
                precio: p.precio
            }));
    }

    /**
     * Generar reporte completo del inventario
     */
    reporteInventario() {
        const totalProductos = this.productos.length;
        const valorTotal = this.productos.reduce((suma, p) => suma + (p.precio * p.stock), 0);
        const stockTotal = this.productos.reduce((suma, p) => suma + p.stock, 0);
        const precioPromedio = this.productos.length > 0 
            ? this.productos.reduce((suma, p) => suma + p.precio, 0) / this.productos.length 
            : 0;

        return {
            nombre: this.nombre,
            totalProductos,
            stockTotal,
            valorTotalInventario: valorTotal.toFixed(2),
            precioPromedio: precioPromedio.toFixed(2),
            productosEnStock: this.productos.filter(p => p.stock > 0).length,
            productosAgotados: this.productos.filter(p => p.stock === 0).length,
            detalleProductos: this.productos.map(p => p.obtenerInfo())
        };
    }

    /**
     * Buscar productos por nombre (búsqueda parcial)
     */
    buscarPorNombre(termino) {
        const termino_lower = termino.toLowerCase();
        return this.productos
            .filter(p => p.nombre.toLowerCase().includes(termino_lower))
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                precio: p.precio,
                stock: p.stock
            }));
    }
}

// ============================================
// EJEMPLO DE USO
// ============================================

console.log("========== DEMOSTRACIÓN DEL INVENTARIO ==========\n");

// Crear inventario
const tienda = new Inventario("Tienda de Electrónica");

// Agregar productos
console.log("--- Agregando productos ---");
console.log(tienda.agregarProducto("Laptop", 1200, 5));
console.log(tienda.agregarProducto("Mouse", 25, 50));
console.log(tienda.agregarProducto("Teclado", 75, 30));
console.log(tienda.agregarProducto("Monitor", 300, 10));
console.log(tienda.agregarProducto("Cables USB", 5, 100));
console.log(tienda.agregarProducto("Auriculares", 80, 20));

// Vender productos
console.log("\n--- Realizando ventas ---");
console.log(tienda.venderProducto(1, 2)); // Vender 2 laptops
console.log(tienda.venderProducto(2, 5)); // Vender 5 mouses
console.log(tienda.venderProducto(3, 10)); // Vender 10 teclados

// Intentar vender sin stock (error)
console.log("\n--- Intento de venta inválida ---");
console.log(tienda.venderProducto(1, 100)); // No hay 100 laptops

// Obtener productos más caros
console.log("\n--- Top 3 Productos más caros ---");
console.log(tienda.obtenerProductosMasCaros(3));

// Filtrar por rango de precio
console.log("\n--- Productos entre $50 y $300 ---");
console.log(tienda.obtenerProductosPorRango(50, 300));

// Buscar por nombre
console.log("\n--- Búsqueda de productos con 'o' ---");
console.log(tienda.buscarPorNombre("o"));

// Productos con bajo stock
console.log("\n--- Productos con stock <= 20 ---");
console.log(tienda.obtenerProductosBajoStock(20));

// Reporte completo
console.log("\n--- REPORTE GENERAL DEL INVENTARIO ---");
const reporte = tienda.reporteInventario();
console.log(JSON.stringify(reporte, null, 2));

// Actualizar stock
console.log("\n--- Actualizando stock ---");
console.log(tienda.actualizarStock(2, 100)); // Aumentar mouses a 100

// Reporte final
console.log("\n--- REPORTE FINAL DESPUÉS DE ACTUALIZACIONES ---");
const reporteFinal = tienda.reporteInventario();
console.log(JSON.stringify(reporteFinal, null, 2));

// ============================================
// ANÁLISIS DE LA SOLUCIÓN
// ============================================

/**
 * PUNTOS CLAVE DEMOSTRADOS:
 * 
 * 1. PROGRAMACIÓN ORIENTADA A OBJETOS
 *    - Clases bien estructuradas
 *    - Encapsulación (métodos privados/públicos)
 *    - Herencia potencial (no aplicada aquí, pero podría haber ProductoDigital)
 * 
 * 2. VALIDACIÓN DE ENTRADA
 *    - Verificación en constructores
 *    - Manejo de tipos (parseInt, parseFloat)
 *    - Errores descriptivos
 * 
 * 3. MANEJO DE ERRORES
 *    - Try-catch en operaciones críticas
 *    - Retorno de objetos con estado {exito, mensaje}
 *    - Lanzamiento de excepciones apropiado
 * 
 * 4. MÉTODOS DE ARRAYS
 *    - .find() para búsqueda por ID
 *    - .filter() para filtros
 *    - .sort() para ordenamiento
 *    - .reduce() para cálculos agregados
 *    - .map() para transformación
 *    - .slice() para limitar resultados
 * 
 * 5. OPERACIONES PRÁCTICAS
 *    - Búsqueda por múltiples criterios
 *    - Agregación de datos
 *    - Reportes con formato
 *    - Validación de reglas de negocio
 * 
 * 6. BUENAS PRÁCTICAS
 *    - Nombres descriptivos
 *    - Documentación con JSDoc
 *    - Métodos con responsabilidad única
 *    - Reutilización de código
 *    - Valores por defecto en parámetros
 */

console.log("\n========== FIN DE LA DEMOSTRACIÓN ==========");

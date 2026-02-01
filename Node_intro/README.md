# Introducción a Node.js

Propósito: explicar de forma breve qué es Node.js, cómo se relaciona con lo que ya aprendiste en JavaScript, y qué comandos/archivos mirar para practicar.

Qué es:
- Node.js es un entorno de ejecución para JavaScript fuera del navegador (basado en V8).
- Permite usar módulos, trabajar con archivos, crear servidores y usar npm para dependencias.

Estructura recomendada (proyecto mínimo):
- `package.json` — metadatos y scripts.
- `index.js` o `example.js` — punto de entrada.
- `lib/` — código modular.

Comandos básicos:
- `node example.js` — ejecutar un archivo JS con Node.
- `npm init -y` — crear `package.json` rápidamente.
- `npm install <paquete>` — instalar dependencias.
- `node --version` — ver versión de Node.

Enlaces útiles:
- Documentación oficial: https://nodejs.org/
- Guía rápida: https://nodejs.dev/learn

Ejercicios sugeridos:
1. Ejecuta `node example.js` y modifica el archivo para leer argumentos (`process.argv`).
2. Crea un pequeño módulo en `lib/` y consúmelo desde `example.js`.

Ejemplo rápido: `example.js` en la misma carpeta contiene un ejemplo sencillo para probar.

Nota: no hace falta crear un proyecto con dependencias para aprender la estructura; aquí verás cómo aplicar lo que ya sabes de JS en Node.

// example.js — Ejemplo mínimo para Node.js

const fs = require('fs');

console.log('Node.js: ejemplo básico funcionando');
console.log('Argumentos recibidos:', process.argv.slice(2));

// Ejemplo: leer un archivo si se pasa el nombre por argumento
const [file] = process.argv.slice(2);
if (file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return console.error('Error leyendo archivo:', err.message);
    console.log(`Contenido de ${file}:\n`, data);
  });
} else {
  console.log('Ejecuta: node example.js nombreArchivo.txt');
}

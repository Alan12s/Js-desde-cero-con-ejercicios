# Introducción a Vue.js

Propósito: explicar la estructura típica de un proyecto Vue, comandos comunes y ejemplos para aprender la sintaxis y el flujo de datos.

Formas de crear un proyecto:
- `npm init vite@latest mi-app -- --template vue` — Vite (recomendado moderno).
- `npm install -g @vue/cli` y `vue create mi-app` — Vue CLI (opciones guiadas).

Estructura mínima:
- `src/App.vue` — componente raíz (Single File Component).
- `src/main.js` — montaje de la app.

Conceptos clave:
- Templates reactivas, `data()`, `computed`, `methods`, `props`.
- Single File Components (`.vue`) contienen `<template>`, `<script>`, `<style>`.

Enlaces útiles:
- Documentación oficial: https://vuejs.org/
- Guía rápida: https://vuejs.org/guide/quick-start.html

Ejercicios sugeridos:
1. Crear un `App.vue` que muestre una lista con `v-for` y un contador con `@click`.
2. Dividir en componentes pequeños y pasar `props`.

Archivo de ejemplo: `App.vue` en esta carpeta muestra un SFC mínimo.

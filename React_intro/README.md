# Introducción a React

Propósito: mostrar la estructura típica de un proyecto React, comandos comunes y dónde aplicar lo aprendido en JavaScript.

Conceptos clave:
- Componentes (funcionales y de clase), JSX, props y estado.
- Estructura mínima: `src/` (componentes), `public/` (index.html), `package.json`.

Comandos / formas de crear un proyecto (opciones):
- `npx create-react-app mi-app` — crea app basada en CRA (fácil, lista para producción educativa).
- `npm create vite@latest mi-app -- --template react` — Vite (más rápido y moderno).
- `npm start` o `npm run dev` — iniciar servidor de desarrollo.

Estructura de ejemplo (simplificada):
- `src/App.jsx` — componente principal.
- `src/index.js` — arranca React y renderiza `<App />`.

Enlaces útiles:
- Documentación oficial: https://reactjs.org/
- Tutorial oficial: https://reactjs.org/tutorial/tutorial.html

Ejercicios sugeridos:
1. Crear un componente funcional `App.jsx` que reciba `props` y renderice una lista usando `map`.
2. Añadir estado con `useState` para manejar un contador.
3. Practicar subida de componentes: dividir `App` en `Header`, `TodoList`, `TodoItem`.

Archivo de ejemplo: `App.jsx` en esta carpeta contiene un componente mínimo con `useState`.

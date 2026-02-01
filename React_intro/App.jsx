// App.jsx — Componente React funcional de ejemplo

import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const items = ['Manzana', 'Banana', 'Cereza'];

  return (
    <div style={{fontFamily: 'Arial, sans-serif'}}>
      <h1>React — Ejemplo mínimo</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>

      <h2>Lista</h2>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

<template>
  <div style="font-family: Arial, sans-serif;">
    <h1>Vue — Ejemplo mínimo</h1>
    <p>Contador: {{ count }}</p>
    <button @click="count++">Incrementar</button>

    <h2>Lista</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      items: ['Pan', 'Queso', 'Leche']
    };
  }
};
</script>

<style scoped>
button { padding: 6px 10px; margin-bottom: 12px; }
</style>

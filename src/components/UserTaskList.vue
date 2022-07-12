<template>
  <section>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </section>
</template>
<script setup>
defineProps({
  id: Number,
  title: String,
  tasks: Array,
});
</script>

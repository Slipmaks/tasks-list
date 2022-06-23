<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr />
  </div>

  <div class="container">
    <List />
  </div>
</template>

<script setup>
import List from "./components/List.vue";
import { ref } from "vue";
const msg = ref("Todo list Composition API");
</script>

<style></style>

<template>
  <div>
    <h1 class="text-cyan-700 font-extrabold text-4xl my-8 ml-8">{{ msg }}</h1>
    <hr />
  </div>

  <div>
    <List />
  </div>
  <user-task-list></user-task-list>
</template>

<script setup>
import List from "./components/List.vue";
import { ref } from "vue";
const msg = ref("Todo list Composition API");
</script>

<style></style>

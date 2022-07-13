<template>
  <section>
    <h1>{{ title }}</h1>
    <input type="text" class="bg-purple-400" v-model="userInput" />
    <button @click="createNewTask(id)">add tasks</button>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </section>
</template>
<script setup>
import { inject, ref } from "vue";
const emit = defineEmits(["add-task"]);
const addToTasks = inject("addToTasks");
defineProps(["id", "title", "tasks"]);

const userInput = ref("");

const createNewTask = (id) => {
  // emit("add-task", id, userInput.value);
  addToTasks(id, userInput.value);
  userInput.value = "";
};
</script>

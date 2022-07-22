<template>
  <section>
    <section class="flex justify-between items-center mb-2">
      <h1 class="text-2xl font-semibold capitalize text-slate-600">
        {{ title }}
      </h1>
      <remove-button @click="deleteList(id)">Remove list</remove-button>
    </section>

    <section class="flex items-center mb-4">
      <default-input type="text" v-model="userInput" />
      <default-button @click="createNewTask(id)">Add tasks</default-button>
    </section>

    <ul class="ml-4">
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </section>
</template>
<script setup>
import { inject, ref } from "vue";
import RemoveButton from "../UI/RemoveButton.vue";
const emit = defineEmits(["add-task"]);
const addToTasks = inject("addToTasks");
const deleteList = inject("deleteList");
defineProps(["id", "title", "tasks"]);

const userInput = ref("");

const createNewTask = (id) => {
  // emit("add-task", id, userInput.value);
  addToTasks(id, userInput.value);
  userInput.value = "";
};
</script>

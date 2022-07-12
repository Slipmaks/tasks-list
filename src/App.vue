<template>
  <!-- Header -->
  <div class="text-center">
    <h1 class="text-cyan-700 font-extrabold text-4xl my-8 ml-8">{{ msg }}</h1>
    <hr />
  </div>

  <!-- Old list  -->
  <div hidden>
    <List />
  </div>

  <!-- New list  -->
  <input
    class="bg-teal-200 mb-4 mr-2 shadow-md rounded-md outline-teal-800 outline-1 py-2 pl-2"
    v-model="listTitle"
  />
  <button @click="addListToArray">Add list</button>
  <user-task-list
    v-for="list in listArray"
    :key="list.id"
    :id="list.id"
    :title="list.title"
    :tasks="list.tasks"
  ></user-task-list>
</template>

<script setup>
import { ref } from "vue";
import List from "./components/List.vue";
const msg = "Todo list Composition API";

const listTitle = ref("");
const listArray = ref([
  {
    id: 1,
    title: "Title one",
    tasks: ["task 1", "task 2", "task 3"],
  },
  {
    id: 2,
    title: "Title two",
    tasks: ["task 1", "task 2", "task 3"],
  },
]);

const addListToArray = () => {
  // const list = {};
  listArray.push();
};
</script>

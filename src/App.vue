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
    @addTask="addToTasks"
  ></user-task-list>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  ref,
  watch,
  watchEffect,
} from "vue";
import List from "./components/List.vue";
const msg = "Todo list Composition API";

const listTitle = ref("");
const listArray = ref([]);

const addListToArray = () => {
  const newId = listArray.value.length + 1;
  const titleValue = listTitle.value;
  const list = {
    id: newId,
    title: titleValue,
    tasks: [],
  };
  listArray.value.push(list);
  listTitle.value = "";
};

const addToTasks = (listId, task) => {
  const list = listArray.value.find((list) => list.id === listId);
  list.tasks.push(task);
  console.log(listArray.value);
};

watch(listArray.value, (newVal) => {
  const json = JSON.stringify(newVal);
  console.log("watch", json);
  localStorage.setItem("list", json);
});

// onMounted(() => {
//   const storedList = localStorage.getItem("list");
//   console.log("onMounted: ", JSON.parse(storedList));
//   listArray.value = JSON.parse(storedList);
// });
</script>

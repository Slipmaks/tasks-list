<template>
  <!-- Header -->
  <the-header :msg="msg"></the-header>

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

  <TaskWrapper :lists="listArray" />
</template>

<script setup>
import { provide, ref, watch, onMounted, reactive } from "vue";
import List from "./components/List.vue";
import TaskWrapper from "./components/ListUI/TaskWrapper.vue";

const msg = "Todo list Composition API";

const listTitle = ref("");
const listArray = ref([]);

onMounted(() => {
  const storedList = JSON.parse(localStorage.getItem("list"));
  console.log("onMounted: ", storedList);
  // const mountedArrayList = [];
  for (const id in storedList) {
    listArray.value.push({
      id: id,
      title: storedList[id].title,
      tasks: storedList[id].tasks,
    });
  }
  // listArray.value = mountedArrayList;
});

const addListToArray = () => {
  const newId = listArray.value.length + 1;
  const titleValue = listTitle.value;
  const list = reactive({
    id: newId,
    title: titleValue,
    tasks: [],
  });
  listArray.value.push(list);
  listTitle.value = "";
};

const addToTasks = (listId, task) => {
  const list = listArray.value.find((list) => list.id === listId);
  list.tasks.push(task);
  console.log(listArray.value);
};

provide("addToTasks", addToTasks);

watch(listArray.value, (newVal) => {
  const json = JSON.stringify(newVal);
  console.log("watch", json);
  localStorage.setItem("list", json);
});
</script>

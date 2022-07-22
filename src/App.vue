<template>
  <section class="bg-slate-50 h-screen">
    <!-- Header -->
    <the-header :msg="msg"></the-header>

    <!-- Old list  -->
    <div hidden>
      <List />
    </div>

    <!-- New list  -->
    <default-input v-model="listTitleInput"></default-input>
    <default-button @click="addListToArray">Add list</default-button>
    <section class="flex flex-wrap content-start">
      <TaskWrapper :lists="listArray" />
    </section>
  </section>
</template>

<script setup>
import { provide, ref, watch, onMounted, reactive } from "vue";
import List from "./components/List.vue";
import TaskWrapper from "./components/ListUI/TaskWrapper.vue";
import DefaultInput from "./components/UI/DefaultInput.vue";

const msg = "Todo list Composition API";

const listTitleInput = ref("");
const listArray = ref([]);

onMounted(() => {
  const storedList = JSON.parse(localStorage.getItem("list"));
  console.log("onMounted: ", storedList);
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
  const title = listTitleInput.value;
  console.log(listTitleInput);
  const list = reactive({
    id: newId,
    title: title,
    tasks: ref([]),
  });
  listArray.value.push(list);
  listTitleInput.value = "";
};
const deleteList = (listId) => {
  // const currentList = listArray.value.find((list) => list.id === listId)
  listArray.value.splice(listId, 1);
};
provide("deleteList", deleteList);

const addToTasks = (listId, task) => {
  const list = listArray.value.find((list) => list.id === listId);
  list.tasks.push(task);
  console.log(listArray.value);
};

provide("addToTasks", addToTasks);

watch(listArray.value, (newVal) => {
  const json = JSON.stringify(newVal);
  localStorage.setItem("list", json);
});
</script>

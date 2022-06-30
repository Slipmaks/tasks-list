<template>
  <div class="mt-8 mx-11">
    <input
      v-model="listName"
      @keyup.enter="addToLists(listName)"
      class="bg-teal-200 mb-4 mr-2 rounded-md outline-teal-800 outline-1 py-2 pl-2"
    />
    <button
      @click="addToLists(listName)"
      class="bg-gradient-to-r from-teal-200 to-cyan-800 rounded-md px-4 py-2 text-white hover:outline hover:outline-1 hover:outline-teal-800"
    >
      Add List
    </button>
    <ul v-if="lists.length" class="flex gap-2 flex-wrap">
      <li
        v-for="{ id, name, items, isSelected } in lists"
        :key="id"
        class="bg-teal-600 p-4 rounded-md min-w-task-width max-w-task-width break-words text-white"
      >
        <span class="mr-4">{{ name }}</span>
        <button
          @click.stop="enableInput(id)"
          class="bg-teal-700 rounded-md px-2 py-1 text-white mb-4 hover:outline hover:outline-1 hover:outline-teal-800"
        >
          Add
        </button>
        <br />
        <input
          class="bg-teal-700 rounded-md mb-4 pl-2 py-1 border-none focus-visible:outline focus-visible:outline-teal-800"
          @input="setTask($event, id)"
          @keyup.enter="addToTasks($event, id)"
          @blur="enableInput(id)"
          v-if="isSelected"
        />
        <ul v-if="items.length">
          <li v-for="(item, index) in items" :key="item" class="ml-6">
            {{ index + 1 }}. {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const listName = ref("");
// const task = ref("");
const lists = ref([]);

const addToLists = (name) => {
  const newId = lists.value.length + 1;
  const selectStatus = ref(false);

  const list = {
    id: newId,
    name: name,
    isSelected: selectStatus,
    task: "",
    items: [],
  };
  lists.value.unshift(list);
  listName.value = "";
};
const setTask = (e, listId) => {
  const list = lists.value.find((list) => list.id === listId);
  list.task = e.target.value;
};
const addToTasks = (e, listId) => {
  const list = lists.value.find((list) => list.id === listId);
  list.items.push(list.task);
  e.target.value = "";
  list.task = "";
};

const enableInput = (listId) => {
  const list = lists.value.find((list) => list.id === listId);
  list.isSelected = !list.isSelected;
};
</script>

<style scoped></style>

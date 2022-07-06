<template>
  <div class="mt-8 mx-11">
    <input
      v-model="listName"
      @keyup.enter="addToLists(listName)"
      class="bg-teal-200 mb-4 mr-2 shadow-md rounded-md outline-teal-800 outline-1 py-2 pl-2"
    />
    <button
      @click="addToLists(listName)"
      class="bg-gradient-to-r shadow-md from-teal-200 to-cyan-800 rounded-md px-4 py-2 text-white hover:outline hover:outline-1 hover:outline-teal-800"
    >
      Add List
    </button>
    <ul v-if="lists.length" class="flex gap-2 flex-wrap">
      <li
        v-for="{ id, name, items, isSelected } in lists"
        :key="id"
        class="bg-teal-600 shadow-md p-4 rounded-md min-w-task-width max-w-task-width break-words text-white"
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
          class="bg-teal-700 shadow-md rounded-md mb-4 pl-2 py-1 border-none focus-visible:outline focus-visible:outline-teal-800"
          @input="setTask($event, id)"
          @keyup.enter="addToTasks($event, id)"
          @blur="enableInput(id)"
          v-if="isSelected"
        />
        <ul v-if="items.length">
          <li v-for="(item, index) in items" :key="item" class="ml-6 my-3">
            {{ index + 1 }}. {{ item.title }}
            <button class="px-1 rounded-md shadow-md bg-lime-500 mx-2">
              check
            </button>
            <button class="px-1 rounded-md shadow-md bg-rose-600">
              remove
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const listName = ref("");
const lists = ref([]);

const addToLists = (name) => {
  const newId = lists.value.length + 1;
  const selectStatus = ref(false);
  const isDone = ref(false);

  const list = {
    id: newId,
    name: name,
    isSelected: selectStatus,
    complete: isDone,
    taskInput: "",
    items: [],
  };
  lists.value.unshift(list);
  listName.value = "";
};
const setTask = (e, listId) => {
  const list = lists.value.find((list) => list.id === listId);
  list.taskInput = e.target.value;
};
const addToTasks = (e, listId) => {
  const list = lists.value.find((list) => list.id === listId);
  const isComplete = ref(false);
  const task = {
    title: list.taskInput,
    complete: isComplete,
  };
  list.items.push(task);
  e.target.value = "";
  list.taskInput = "";
};

const enableInput = (listId) => {
  const list = lists.value.find((list) => list.id === listId);
  // console.log(lists.value[listId]);

  list.isSelected = !list.isSelected;
};
</script>

<style scoped></style>

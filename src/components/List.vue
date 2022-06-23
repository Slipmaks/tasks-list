<template>
  <div>
    <input v-model="listName" @keyup.enter="addToLists(listName)" />
    <button @click="addToLists(listName)">Add List</button>
    <ul v-if="lists.length" class="d-flex">
      <li
        v-for="{ id, name, items, isSelected } in lists"
        :key="id"
        class="list"
      >
        {{ name }}
        <button @click.stop="enableInput(id)">Add</button>
        <br />
        <input
          v-model="task"
          @keyup.enter="addToTasks(task, id)"
          @blur="enableInput(id), (task = '')"
          v-if="isSelected"
        />
        <ul v-if="items.length">
          <li v-for="(item, index) in items" :key="item">
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
const task = ref("");
const lists = ref([]);

const addToLists = (name) => {
  const newId = lists.value.length + 1;
  const selectStatus = ref(false);

  const list = {
    id: newId,
    name: name,
    isSelected: selectStatus,
    task: task,
    items: [],
  };
  lists.value.unshift(list);
  listName.value = "";
};

const addToTasks = (currentTask, listId) => {
  const list = lists.value.find((list) => list.id === listId);
  list.items.push(currentTask);
  task.value = "";
};

const enableInput = (listId) => {
  const list = lists.value.find((list) => list.id === listId);
  list.isSelected = !list.isSelected;
};
</script>

<style scoped>
li {
  list-style: none;
}
.list {
  width: 350px;

  border-radius: 0.5rem;
  padding: 1rem;
  background: linear-gradient(0deg, #c7dae1, #fafbff);
}
.d-flex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 1rem;
}
</style>

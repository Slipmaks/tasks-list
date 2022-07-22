<template>
  <user-task-list
    class="bg-slate-100 m-2 p-3 rounded-md w-80 h-fit"
    v-for="list in lists"
    :key="list.id"
    :id="list.id"
    :title="list.title"
    :tasks="list.tasks"
  >
  </user-task-list>
</template>
<script setup>
import UserTaskList from "./UserTaskList.vue";

defineProps(["lists"]);
</script>

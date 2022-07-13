<template>
  <user-task-list
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

<template>
  <div class="text-center">
    <h1 class="text-cyan-700 font-extrabold text-4xl my-8 ml-8">{{ msg }}</h1>
    <hr />
  </div>
</template>

<script setup>
defineProps(["msg"]);
</script>

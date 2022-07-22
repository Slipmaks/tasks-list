<template>
  <div class="text-center bg-gradient-to-r from-green-400 to-blue-500 py-4">
    <span
      class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-l from-sky-300 to-green-300"
    >
      {{ msg }}
    </span>
  </div>
  <hr class="mb-4" />
</template>

<script setup>
defineProps(["msg"]);
</script>

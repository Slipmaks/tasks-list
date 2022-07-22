<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    class="bg-teal-200 shadow-md rounded-md outline-teal-800 outline-1 py-2 pl-2"
  />
</template>
<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

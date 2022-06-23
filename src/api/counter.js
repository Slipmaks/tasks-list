import { ref } from "vue";

export default function useCounter() {
  const count = ref(0);
  const value = ref("Hi");
  function increment() {
    count.value++;
  }

  return {
    increment,
    count,
    useCounter,
  };
}

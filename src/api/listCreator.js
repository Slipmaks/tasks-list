import { ref } from "vue";

export default function createList(listName, id) {
  const list = ref({
    id: id,
    name: listName,
    items: [],
  });

  return {
    createList,
    list,
  };
}

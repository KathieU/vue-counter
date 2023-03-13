import { computed, ref } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  const count = computed(() => store.state.count);

  const increment = () => store.commit("increment");
  const decrement = () => store.commit("decrement");
  const reset = () => store.commit("reset");

  let value = ref("");
  const setValue = () => store.dispatch("setValue", Number(value.value));

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    value,
  };
}

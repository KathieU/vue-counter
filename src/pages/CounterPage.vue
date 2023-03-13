<template>
    <div>
        <h1>Counter page</h1>
        <router-link to="/">Home</router-link>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
        <div>
            <input type = "number" v-model="value" />
            <button @click="setValue">Set Value</button>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const count = computed(() => store.state.count);

        const increment = () => store.commit('increment');
        const decrement = () => store.commit('decrement');
        const reset = () => store.commit('reset');

        let value = ref('');
        const setValue = () => store.dispatch('setValue', Number(value.value));
        
        
    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value,
    };
    },
       
    };
</script>

<style scoped>

</style> -->



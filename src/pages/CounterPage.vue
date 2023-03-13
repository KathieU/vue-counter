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
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const count = computed(() => store.state.count);
        // const inputValue = computed(() => store.state.inputValue);

        const increment = () => store.commit('increment');
        const decrement = () => store.commit('decrement');
        const reset = () => store.commit('reset');
        const setValue = () => store.dispatch('setValue', Number(value));

        // function setValue (){
        //     store.dispatch('setInputValue', inputValue.value);
        // }
        
        let value = ''
    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value,
    //   inputValue,
    // //   setValue,
    //   setValue: () => {
    //     store.commit('setInputValue', inputValue.value);
    //   },
    };
    },
       
    };
</script>

<style scoped>

</style> -->


<!-- <template>
    <div>
      <h1>Counter App</h1>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="asyncIncrement">Async +</button>
      <button @click="reset">Reset</button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();

      const count = computed(() => store.getters.count);
      const doubleCount = computed(() => store.getters.doubleCount);
  
    //   const state = reactive({
    //     count: computed(() => store.getters.count),
    //     doubleCount: computed(() => store.getters.doubleCount),
    // });
  
      const increment = () => store.commit('increment');
      const decrement = () => store.commit('decrement');
      const asyncIncrement = () => store.dispatch('asyncIncrement');
      const reset = () => store.commit('reset');
  
      return {
        // count: state.count,
        // doubleCount: state.doubleCount,
        count,
        doubleCount,
        increment,
        decrement,
        asyncIncrement,
        reset,
      };
      
    },

  };
  </script>
  
  <style scoped>
  
  </style> -->
// import Vue from "vue";
// import VueX from "vuex";

// Vue.use(VueX);

// export default {
//   state: {
//     count: 0,
//   },
//   mutation: {},
//   actions: {},
//   getters: {},
// };

// import { useStore } from "vuex";

// export default {
//   setup() {
//     const store = useStore({
//       state() {
//         return {
//           count: 0,
//         };
//       },

//       getters: {},
//       actions: {},
//       mutations: {},
//     });
//   },
// };

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      inputValue: 0,
    };
  },

  getters: {
    getCount(state) {
      return state.count;
    },
    getInputValue(state) {
      return state.inputValue;
    },
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    // setInputValue(state, value) {
    //   state.inputValue = value;
    // },
    setValue(state, value) {
      state.count = value;
    },
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
    setValue({ commit }, value) {
      commit("setValue", value);
    },
  },
});

export default store;

// import { createStore } from "vuex";

// const store = createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },

//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     },
//     reset(state) {
//       state.count = 0;
//     },
//   },

//   actions: {
//     asyncIncrement(context) {
//       setTimeout(() => {
//         context.commit("increment");
//       }, 1000);
//     },
//   },

//   getters: {
//     count(state) {
//       return state.count;
//     },
//     doubleCount(state) {
//       return state.count * 2;
//     },
//   },
// });

// export default store;

// import { createStore } from "vuex";

// const store = createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },

//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     },
//     reset(state) {
//       state.count = 0;
//     },
//   },

//   actions: {
//     asyncIncrement(context) {
//       setTimeout(() => {
//         context.commit("increment");
//       }, 1000);
//     },
//   },

//   getters: {
//     count(state) {
//       return state.count;
//     },
//     doubleCount(state) {
//       return state.count * 2;
//     },
//   },
// });

// export default store;

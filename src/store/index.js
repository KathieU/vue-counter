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

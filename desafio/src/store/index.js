import { createStore } from 'vuex';

export default createStore ({
  state: {
    stickersAndQuantity: {},
  },
  mutations: {
    newStickersAndQuantity(state, newValue) {
      state.purchases = newValue;
    }
  }
});
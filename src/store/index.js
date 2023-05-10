import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      shoppingcart: []
    }
  },
  mutations: {
    addToCart(state, item) {
      state.shoppingcart.push(item);
    }
  }
})


export default store;

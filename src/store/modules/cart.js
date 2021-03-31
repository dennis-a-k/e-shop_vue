export default {
  mutations: {
    addProduct (state, product) {
      const find = state.products.find(el => el.id === product.id)
      if (find) {
        find.quantity++
      } else {
        const prod = Object.assign({ quantity: 1 }, product)
        state.products.unshift(prod)
      }
    },
    dellProduct (state, product) {
      if (product.quantity > 1) {
        product.quantity--
      } else {
        state.products.splice(state.products.indexOf(product), 1)
      }
    }
  },
  state: {
    products: []
  },
  getters: {
    productsCart (state) {
      return state.products
    }
  }
}

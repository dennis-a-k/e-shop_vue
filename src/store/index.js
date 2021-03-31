import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import product from './product'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products, product, cart
  }
})

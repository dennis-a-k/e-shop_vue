<template>
  <div class="text-right">
    <button class="button-no" type="button" @click="showCart = !showCart" v-if="!productsCart.length">
      Корзина
    </button>
    <button class="button btn-cart" type="button" @click="showCart = !showCart" v-else>
      <div class="count">{{ productsCart.reduce((summ, item) => summ + item.quantity, 0) }}</div>
      Корзина
    </button>
    <CartBlock v-show="showCart" />
  </div>
</template>

<script>
import CartBlock from '@/components/header/cart/CartBlock'
import { mapGetters } from 'vuex'

export default {
  name: 'cart',
  data: () => ({
    showCart: false
  }),
  computed: mapGetters(['productsCart']),
  components: {
    CartBlock
  }
}
</script>

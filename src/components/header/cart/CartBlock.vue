<template>
  <div class="cart-block">
    <p class="products__no" v-if="!productsCart.length">Корзина пуста</p>
    <div v-else>
      <p>
        Сумма покупок:
      <span id="cost">{{ productsCart.reduce((summ, item) => summ + item.quantity*item.price, 0) }} ₽</span>
      </p>
      <hr>
      <div class="cart-item mb-3" v-for="product in productsCart" :key="product.id">
        <button class="minus-plus" @click="addProduct(product)">&#43;</button>
        <p>{{ product.title }}</p>
        <span id="product-quantity">{{ product.quantity }} шт.</span>
        <p id="product-price">{{ product.quantity * product.price }} ₽</p>
        <button class="minus-plus" @click="dellProduct(product)">&#8722;</button>
      </div>
      <hr>
      <div class="text-right"><button class="button">Оформить</button></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'cartBlock',
  computed: mapGetters(['productsCart']),
  methods: {
    ...mapMutations(['addProduct', 'dellProduct'])
  }
}
</script>

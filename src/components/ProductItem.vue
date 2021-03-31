<template>
  <div class="product-item">
    <router-link :to="{ name: 'Product', params: { id: product.id }}"><img :src="`/img/products/${product.img}`" :alt="product.title"></router-link>
    <router-link :to="{ name: 'Product', params: { id: product.id }}"><h3 class="product-title">{{ product.title }}</h3></router-link>
    <p class="product-price">{{ product.price }} ₽</p>
    <button class="button" @click="addProduct(product)">
      Купить
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['product'],
  methods: {
    ...mapMutations(['addProduct'])
  }
}
</script>

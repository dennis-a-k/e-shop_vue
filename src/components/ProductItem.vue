<template>
  <div class="product-item">
    <a href="#"><img :src="product.img" :alt="product.title"></a>
    <a href="#"><h3>{{ product.title }}</h3></a>
    <p>{{ product.price }} ₽</p>
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

<template>
  <div>
    <b-row>
      <b-col cols="4">
        <div class="product-item">
          <img :src="`/img/products/${product.img}`" :alt="product.title">
        </div>
      </b-col>
      <b-col cols="8">
        <h3 class="text-center product-title">{{ product.title }}</h3>
        <p class="text-justify mt-3">{{ product.description }}</p>
        <div class="text-right">
          <p class="product-price">{{ product.price }} ₽</p>
          <button class="button" @click="addProduct(product)">
            Купить
          </button>
        </div>
      </b-col>
    </b-row>
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

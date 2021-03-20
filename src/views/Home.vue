<template>
  <main class="container">
    <div class="products">
      <p class="products__no" v-if="!products.length"><b-spinner label="Spinning" variant="secondary"></b-spinner></p>
      <ProductItem
        v-else
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  name: 'Home',
  data: () => ({
    products: []
  }),
  async mounted () {
    this.products = await this.$store.dispatch('fetchProducts')
  },
  components: {
    ProductItem
  }
}
</script>

<template>
  <div class="container p-3">
    <ProductCard :product="product" />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Product',
  data: () => ({
    product: []
  }),
  async mounted () {
    const id = this.$route.params.id
    this.product = await this.$store.dispatch('fetchProductById', id)
  },
  components: {
    ProductCard
  }
}
</script>

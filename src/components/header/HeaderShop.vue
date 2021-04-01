<template>
  <header>
    <div class="container header p-3">
      <router-link to="/" class="logo">
        e-Shop
        <span>
          Интернет магазин
        </span>
      </router-link>
      <Cart />
    </div>
  </header>
</template>

<script>
import Cart from '@/components/header/cart/Cart'

export default {
  name: 'headerShop',
  components: {
    Cart
  }
}
</script>

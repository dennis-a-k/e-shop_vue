<template>
  <header>
    <div class="container header p-3">
      <router-link to="/" class="logo">
        e-Shop
        <span>
          Интернет магазин
        </span>
      </router-link>
      <Search />
      <Cart />
      <!-- <router-link to="/about">About</router-link> -->
    </div>
  </header>
</template>

<script>
import Search from '@/components/header/Search'
import Cart from '@/components/header/cart/Cart'

export default {
  name: 'headerShop',
  components: {
    Search, Cart
  }
}
</script>

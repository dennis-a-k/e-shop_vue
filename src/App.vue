<template>
  <div id="app">
    <HeaderShop />
    <router-view/>
    <FooterShop />
  </div>
</template>

<script>
import HeaderShop from '@/components/header/HeaderShop'
import FooterShop from '@/components/footer/FooterShop'

export default {
  name: 'App',
  components: {
    HeaderShop, FooterShop
  }
}
</script>

<style lang="scss">
@import 'assets/scss/index.scss'
</style>

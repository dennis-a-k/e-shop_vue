<template>
  <div class="product-item">
    <a href="#"><img :src="product.img" :alt="product.title"></a>
    <a href="#"><h3>{{ product.title }}</h3></a>
    <p>{{ product.price }} ₽</p>
    <button class="button">
      Купить
    </button>
  </div>
</template>

<script>

export default {
  props: ['product']
}
</script>

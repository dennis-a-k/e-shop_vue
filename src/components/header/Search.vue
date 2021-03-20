<template>
  <form action="#" method="post" class="search-form" @submit.prevent="">
    <input type="text" class="search-field" v-model="productSearch" placeholder="Поиск">
    <button class="btn-search" type="submit">
      <img src="/img/search.png" alt="search">
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    productSearch: ''
  })
}
</script>

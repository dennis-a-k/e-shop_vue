<template>
  <div id="app" class="container">
    <header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

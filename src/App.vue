<template>
  <div id="app">
    <WShopHat />
    <WShopItems />
  </div>
</template>

<script>
import WShopHat from '@/components/WShopHat'
import WShopItems from '@/components/WShopItems.vue'

export default {
  name: 'App',
  components: {
    WShopHat,
    WShopItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

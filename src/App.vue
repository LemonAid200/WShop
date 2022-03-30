<template>
  <div id="app">

    <WShopHat />
    <WShopItems 
      v-bind:waifus="products"
    />
    <WShopPages/>
    

  </div>
</template>

<script>
import WShopHat from '@/components/WShopHat'
import WShopItems from '@/components/WShopItems.vue'
import WShopPages from '@/components/WShopCatalogePagesLinks.vue'
import store from '@/vuex/store'

export default {
  name: 'App',
  components: {
    WShopHat,
    WShopItems,
    WShopPages
  },
  data(){
    return{

      products: store.state.mainPage

    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>

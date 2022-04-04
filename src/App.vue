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
// import store from '@/vuex/store'

export default {
  name: 'App',
  components: {
    WShopHat,
    WShopItems,
    WShopPages
  },
  data(){
    return{

      products: []

    }
  },
  mounted(){
    fetch('http://localhost:3000/waifus')
    .then(response => response.json())
    .then(data => this.products = data)
    .catch(err => console.log(err.message))

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

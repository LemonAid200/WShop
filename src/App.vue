<template>
  <div id="app">

    <WShopHat />
    <WShopItems 
      v-bind:waifus="products"
    />

    

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
  },
  data(){
    return{
      products: [
        {id: 1, waifuName: 'Aska',  img: "/img/Aska.945c8c7d.jpg"},
        {id: 2, waifuName: 'Emilia',  img: "/img/Emilia.3a6f69fc.jpg"},
        {id: 3, waifuName: 'kaguya',  img: "/img/kaguya.cebd923e.jpg"}
        
      ]
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

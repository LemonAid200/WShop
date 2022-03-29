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
        {id: 1, waifuName: 'Chika Fujiwara is the heroine in the Kaguya-sama wa Kokurasetai series. She is a third-year high school student at Shuchi in Academy', 
         url: "https://pm1.narvii.com/7201/435d9131cf4ebca9ddd55b7b43edd0d232c16a1cr1-697-919v2_hq.jpg"},
        {id: 2, waifuName: 'Aska',  url: "http://pm1.narvii.com/7182/35026d057a8b37d8235755648325e33ad755e70fr1-900-1136v2_uhq.jpg"},
        {id: 3, waifuName: 'Emilia',  url: "https://pm1.narvii.com/6526/ccb7c5302bff111fa59c7a61526cbc6c49005a6d_hq.jpg"}
        
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

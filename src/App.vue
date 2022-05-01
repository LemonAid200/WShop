<template>
  <div id="app">

    <WShopHat />
    <WShopItems 
      v-bind:waifus="displayedProducts"
    />
    <WShopPages/>
    

  </div>
</template>

<script>
import WShopHat from '@/components/WShopHat'
import WShopItems from '@/components/WShopItems.vue'
import WShopPages from '@/components/WShopCatalogePagesLinks.vue'
// import axios from 'axios'
import store from '@/vuex/store'
const dbURL = 'http://localhost:3000/waifus'
// const waifuURL = 'https://api.waifu.im/random/'


export default {
  name: 'App',
  components: {
    WShopHat,
    WShopItems,
    WShopPages
  },
  data(){
    return{

      AllProducts: [],
      displayedProducts: []
      

    }
  },
  mounted(){
    fetch(dbURL)
    .then(response => response.json())
    .then(data => {
      this.AllProducts = data
      this.renderPage()
    })
    .catch(err => console.log(err.message))

  },
  methods: {
    renderPage(){
      let pageNumber = store.state.displayedPage
      this.displayedProducts = []
      let arrayStart =(pageNumber-1)*5
      let arrayEnd = arrayStart+5
      if (arrayStart > this.AllProducts.length) {return}
      if (arrayEnd > this.AllProducts.length) {arrayEnd = this.AllProducts.length}
      for(let i=arrayStart;i<arrayEnd;i++){
        this.displayedProducts.push(this.AllProducts[i])
      }
    }
  }

  // this method will add n waifus
  // async created() {
  //   const n = 2
  //   for (let i = 0; i < n; i++){
  //     fetch(waifuURL)
  //     .then(response => response.json())
  //     .then(data => axios.post(dbURL, {waifuName: 'Random Waifu', url: data.images[0].url}))
  //   }

  // }
  
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

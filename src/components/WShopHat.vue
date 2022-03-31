<template>
    <header id="hat">
        <h1 class="title">Waifu Shop</h1>
        <button class="cart_button">{{'Корзина (' + amoutInCart + ')'}}</button>
    </header>
</template>

<script>
import store from '@/vuex/store'

export default {
  
  data(){
    return{
      amoutInCart: store.state.cart.length
    }
  }
  
}
</script>


<style>
    #hat{
        position: relative;
        display: inline-flex;
        background-color: rgb(190, 165, 132);
        width: 100vw;
        height: 80px;
        align-items: center;
        margin-bottom: 15px;
    }
    .title{
        margin-left: 15px;
    }
    .cart_button{
        background-color: rgb(101 165 93 / 63%);
        width: 100px;
        height: 40px;
        border-radius: 20px;
        position: absolute;
        right: 15px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .cart_button:hover{
        background-color: rgb(106 196 94 / 48%);

    }
</style>
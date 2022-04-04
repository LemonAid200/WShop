<template>
    <div class="item">
        <img class="image" :src='waifu.url' alt="">
        <div class="description">{{waifu.waifuName}}</div>
        <button class="addToCartButton" v-on:click="doDoDo(waifu)">Add</button>
    </div>
</template>


<script>
import store from "@/vuex/store"

export default({
   props:{
       waifu:{
           type: Object,
           required: true,
        }
    },
    methods: {
        doDoDo(waifu){
            store.state.cart.push(waifu)
            console.log(store.state.cart)
        }
    }
  
})
</script>

<style>
    .item{
        position: relative;
        height: 360px;
        width: 180px;
        border: 3px solid rgb(112, 185, 82);
        border-radius: 20px;
        margin: 10px;
        text-align: center;
        overflow: hidden;
        
    }
    .addToCartButton{
        background-color: rgb(101 165 93);
        width: 80px;
        height: 35px;
        border-radius: 20px;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translate(-50%);
    }

    .addToCartButton:hover{
        background-color: rgb(106 196 94);
    }

    .description{
        position: absolute;
        font-size: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background-color: rgba(112, 110, 106, 0.7);
        padding-top: 20px;
        opacity: 0;
        transition: opacity 0.5s;
    }

    .description:hover{
        opacity:1;
    }
    
    .image{
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }

</style>



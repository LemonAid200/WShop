<template>
    <div class="item">
        <img class="image" :src='waifu.img' alt="">
        <div class="description">{{waifu.waifuName}}</div>
        <button class="addToCartButton">Add</button>
    </div>
</template>

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
        background-color: rgb(46, 194, 46);
        width: 80px;
        height: 35px;
        border-radius: 20px;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translate(-50%);
    }

    .description{
        font-size: 20px;
    }
    
    .image{
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }

</style>


<script>

export default({
   props:{
       waifu:{
           type: Object,
           required: true,
           
       }
       
   }
  
})
</script>

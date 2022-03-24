<template>
    <header id="hat">
        <h1 class="title">Waifu Shop</h1><button class="cart_button">Корзина</button>
    </header>
</template>

<style>
    #hat{
        position: fixed;
        left: 0;
        top: 0;
        display: inline-flex;
        background-color: rgb(190, 165, 132);
        width: 100vw;
        height: 80px;
    }
    .title{
        margin-left: 15px;
    }
    .cart_button{
        background-color: rgb(46, 194, 46);
        width: 100px;
        height: 40px;
        border-radius: 20px;
        position: fixed;
        right: 15px;
        top: 20px;


    }
</style>
<template>
    <header id="hat">
        <h1 class="title">Waifu Shop</h1>
        <button class="cart_button">Корзина</button>
    </header>
</template>

<style>
    #hat{
        position: absolute;
        display: inline-flex;
        background-color: rgb(190, 165, 132);
        width: 100vw;
        height: 80px;
        align-items: center;
    }
    .title{
        margin-left: 15px;
    }
    .cart_button{
        background-color: rgb(46, 194, 46);
        width: 100px;
        height: 40px;
        border-radius: 20px;
        position: absolute;
        right: 15px;
        cursor: pointer;
    }

    .cart_button :hover{
        background-color: rgb(95, 36, 36);

    }
</style>
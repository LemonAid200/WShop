<template>
    <div class="allItemsWrapper">
        <div class="allItems">
            <item 
                v-for="waifu in waifus" :key="waifu.id"
                v-bind:waifu="waifu"
            />
        </div>
    </div>
</template>

<script>
import item from '@/components/WShopItem.vue'

export default {
    props: ['waifus'],
    components:{
        item
    }
}
</script>

<style scoped>
    .allItems{
        position: absolute;
        left:50%;
        transform: translate(-50%);
    }

   
</style>



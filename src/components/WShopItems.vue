<template>
        <div class="allItems">
            <item 
                v-for="waifu in waifus" :key="waifu.id"
                v-bind:waifu="waifu"
            />
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
        display: grid;
        max-width: 1000px;
        margin-right: auto;
        margin-left: auto;
        grid-template-columns: repeat(auto-fill, 200px);

    }

   
</style>



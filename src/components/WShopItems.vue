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



<template>
    <div class="closeBtn">
        <img @click="close" :src="getAssetsFile('pageClose.png')" alt="" />
    </div>
</template>

<script setup>
import { getAssetsFile } from '@/utils/index'
import { usePageFunStore } from '@/store/modules/pageFun'

const props = defineProps({
    backFun: Function
})  
function close() {
    props.backFun()
}



</script>

<style lang='scss' scoped>
.closeBtn {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    z-index: 100000;
}
</style>
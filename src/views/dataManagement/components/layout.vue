<template>
    <div class="layoutView" v-if="PageFunStore.getPageClose">
        <closeBtn :backFun="backFun"></closeBtn>
        <div class="layout">
            <div class="layout-sider">
                <BasicMenu></BasicMenu>
            </div>
            <div class="layout-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template> 
<script   setup>
import { ref, computed } from 'vue'
import closeBtn from '@/components/diy-components/closeBtn.vue'
import { BasicMenu } from '@/components/Menu'
import { usePageFunStore } from '@/store/modules/pageFun'
let PageFunStore = usePageFunStore()
function backFun() {
    PageFunStore.setPageClose(false)
}
</script>
  
<style lang='scss' scoped> .layoutView {
     width: 100%;
     height: 100%;
     background-color: #004A3C;

     .layout {
         height: 100%;
         display: flex;
         padding-top: 34px;

         .layout-sider {
             width: 200px;
             background-color: #004A3C;
         }

         .layout-content {
             flex: 1;
             margin: 0 8px;
         }
     }
 }
</style>
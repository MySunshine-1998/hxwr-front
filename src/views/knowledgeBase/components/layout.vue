<template>
    <div class="layoutView" v-if="PageFunStore.getPageknowledgeBaseClose">
        <closeBtn :backFun="backFun"></closeBtn>
        <div class="layout">
            <div class="layout-header">
                知识库
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
    PageFunStore.setPageknowledgeBaseClose(false)
}
</script>
  
<style lang='scss' scoped> .layoutView {
     width: 80%;
     height: 86%;
     background-color: #004A3C;
     margin: 0 auto;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border-radius: 40px 0px 40px 0;

     .layout {
         height: 100%;
         //  display: flex;

         //  padding-top: 34px;
         .layout-header {
             height: 34px;
             padding: 0 34px;
             line-height: 34px;
             color: #fff;
             //  font-size: 14px;
         }

         .layout-sider {
             width: 200px;
             background-color: #004A3C;
         }

         .layout-content {
             flex: 1;
             margin: 0 8px;
             height:calc(100% - 68px);
         }
     }
 }
</style>
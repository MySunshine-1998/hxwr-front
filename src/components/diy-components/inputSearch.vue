<template>
  <div class="inputSearch">
    <a-input-search v-model:value="value" placeholder="请输入微生物名称、英文名、CAS号码查询" enter-button @search="onSearch" />
    <div class="keywords" v-if="props.keywords && props.keywords.length">
      热门关键字： <span v-for="(item, index) in props.keywords" :key="index">{{ item }}{{ props.keywords.length - 1 == index ? '' : '，'
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const props = defineProps({
  keywords: Array
})
const emit = defineEmits(['search'])
const value = ref('')
function onSearch() {
  if (value.value) {
    emit('search', value.value)
  }

}
</script>

<style lang='scss' scoped> .inputSearch {
   width: 60%;
   margin: 0 auto;
   text-align: center;

   ::v-deep(.ant-input-group-wrapper) {
     .ant-input {
       padding: 10px 11px;
       font-size: 16px;
       background-color: #46976D;
       border: none;
       color: #fff;
       display: flex;
       align-items: center;

       &::placeholder {
         color: #D1D1D1;
       }
     }
   }

   ::v-deep(.ant-input-search .ant-input-search-button) {
     height: 45px !important;
     background-color: #000;
   }

   .keywords {
     display: flex;
     align-items: center;
     margin-top: 12px;
     color: #FFFFFF;
     line-height: 9px;
     opacity: 0.5; 
   }
 }</style>
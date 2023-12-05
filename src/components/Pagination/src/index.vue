<template>
  <div class="pagination">
    <a-pagination v-bind="$attrs" :total="propVal.total" :showSizeChanger="false" :showTotal="showTotal"
      :pageSizeOptions="propVal.pageSizeOptions" :pageSize="propVal.pageSize" v-model:current="propVal['current']"
      @change="change">
      <template #itemRender="{ type, originalElement }">
        <span v-if="type === 'prev'">上一页</span>
        <a v-else-if="type === 'next'">下一页</a>
        <component :is="originalElement" v-else></component>
      </template>
    </a-pagination>
  </div>
</template>
<script  setup>
import { ref, reactive, watch } from 'vue';
let props = defineProps({
  total: Number,
  pageSize: Number,
  current: Number,
  pageSizeOptions: {
    type: Array,
    default: () => ['10', '30', '60', '80']
  },
});
const emit = defineEmits();
let propVal = reactive({})

watch(props, (value) => {
  Object.assign(propVal, value)
}, { deep: true, immediate: true })


const showTotal = (total) => {
  return `共${Math.floor(total / propVal.pageSize) || 0 + 1}页`
};
const change = (page, pageSize) => {
  //向父级组件传值  
  emit('pagination-change', page, pageSize);
};

</script>
<style lang="scss" scoped>
.pagination {
  text-align: center;
  padding: 10px 20px 0;
  color: #BAFF8C;

  ::v-deep(.ant-pagination) {
    .ant-pagination-total-text {
      color: #BAFF8C;
    }

    .ant-pagination-item {
      a {
        color: #BAFF8C;
      }

    }

    .ant-pagination-prev,
    .ant-pagination-next {
      color: #BAFF8C;
      padding: 0 10px;
      background-image: url(@/assets/image/pagination/pagination.png);
      background-size: 100% 100%;
      border-radius: 0px;

      a {
        color: #BAFF8C;
      }
    }

    .ant-pagination-item {
      color: #BAFF8C;
      padding: 0 10px;
      background-image: url(@/assets/image/pagination/paginationTextactive.png);
      background-size: 100% 100%;
      border-radius: 0px;
      border: none;
    }

    .ant-pagination-item-active {
      background-image: url(@/assets/image/pagination/paginationText.png);
      background-size: 100% 100%;
      border-color: transparent;
      background-color: transparent;
    }

    .ant-pagination-options {
      color: #BAFF8C;

      .ant-select-selector {
        background-image: url(@/assets/image/pagination/paginationTextactive.png);
        background-size: 100% 100%;
        background-color: transparent;
      }

      .ant-pagination-options-quick-jumper {
        input {
          border: none;
          border-radius: 0;
          background-color: transparent;
          background-image: url(@/assets/image/pagination/paginationTextactive.png);
          background-size: 100% 100%;
          color: #BAFF8C;
          font-size: 14px;
        }
      }

    }

    .ant-pagination-item-ellipsis {
      color: #BAFF8C !important;
      background-image: url(@/assets/image/pagination/paginationTextactive.png);
      background-size: 100% 100%;
    }
  }
}
</style>
 


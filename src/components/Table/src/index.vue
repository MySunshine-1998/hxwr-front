<template>
  <div class="BasicTable">
    <div class="formView" v-if="props.isForm">
      <BasicForm :schemas="formHeader" v-model="formVal" @confirm="handleFormClick"></BasicForm>
    </div>
    <div class="operatebtns">
      <slot :name="'action'"></slot>
    </div>
    <a-table v-bind="$attrs" v-if="columnsVal.length > 0 && loading == false" :columns="columnsVal" :bordered="true"
      :pagination="false" :scroll="scroll" @change="handleTableChange">
      <template #bodyCell="{ column, record }">
        <template v-if="column.type == 'text' && column.dataIndex != 'operation'">
          <span>{{ record[column.dataIndex] }}</span>
        </template>
        <template v-if="column.type == 'select' && column.dataIndex != 'operation'">
          <span :style="{ color: column.option.find(u => u.value == record[column.dataIndex]).color || '#fff' }">{{
            column.option.find(u => u.value == record[column.dataIndex]).label }}</span>
        </template>
        <template v-else-if="column.dataIndex == 'operation'">
          <a-button class="btnItem" :type="item.type" @click="item.action(record, column)"
            v-for="( item, index ) in  operationBtns " :key="index">{{ item.label }}</a-button>
        </template>
      </template>
    </a-table>
    <div v-if="columnsVal.length == 0 && loading == false" class="EmptyTable">
      <span>
      </span>
      <span>
        <a-empty />
      </span>
    </div>
    <div class="spin" v-if="loading">
      <a-spin />
    </div>
    <div class="Pagination" v-if="props.isShowPagination">
      <BasicPagination show-quick-jumper :total="props.total" :pageSize="props.pageSize" :current="props.current"
        @pagination-change="changePage"></BasicPagination>
    </div>


  </div>
</template>

<script setup>
import { BasicForm } from '@/components/Form'
import { BasicPagination } from '../../Pagination/index'
import { reactive, computed } from 'vue'
let props = defineProps({
  isForm: Boolean,
  scroll: Object,
  columns: Array,
  operationBtns: Array,
  total: Number,
  pageSize: Number,
  current: Number,
  pageSizeOptions: {
    type: Array,
    default: () => ['10', '30', '60', '80']
  },
  isShowPagination: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: true
  }
})
let columnsVal = computed(() => {
  return props.columns.filter(item => !item.hidden)
})
let operationBtns = computed(() => {
  return props.operationBtns
})
let formHeader = computed(() => {
  return props.columns.map((item) => {
    return {
      ...item,
      header: item.title,
      type: 'text',
      width: '100px',
      field: item.dataIndex,
    }
  }).filter(item => item.search)
})
let formVal = reactive({})

function handleTableChange(pagination, filters, sorter, { currentDataSource }) {
}
function handleFormClick(item, data) {
  console.log(item, data)
 }
function changePage(page, pageSize) {

}
</script>

<style lang="scss" scoped>
.BasicTable {
  .operatebtns {
    padding: 12px;
  }

  .EmptyTable {
    text-align: center;
    padding: 12px 0;
    // height: 100%;
    color: #999;
    background-color: rgba(22, 105, 220, 0.075);
  }

  .spin {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btnItem {
    margin: 0 6px;
  }

  .Pagination {
    margin-top: 4px;
  }
}
</style>

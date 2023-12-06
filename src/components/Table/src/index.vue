<template>
  <div class="BasicTable">
    <div class="formView" v-if="props.isForm">
      <BasicForm :schemas="formHeader" v-model="formVal" @confirm="handleFormClick"></BasicForm>
    </div>
    <div class="operatebtns">
      <slot :name="'action'"></slot>
    </div>
    <a-table v-bind="$attrs"
      :row-selection="props.isRowSelection ? { selectedRowKeys: selectedRowKeysArr, onChange: onSelectionChange } : null"
      v-if="columnsVal.length > 0 && loading == false" :columns="columnsVal" :bordered="true" :pagination="false"
      :scroll="scroll" :custom-row="customRow" @change="handleTableChange">
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.dataIndex == 'serialNumber'">
          <span>{{ index + 1 }}</span>
        </template>
        <template v-if="column.type == 'text' && column.dataIndex != 'operation'">
          <span>{{ record[column.dataIndex] }}</span>
        </template>
        <template v-if="column.type == 'select' && column.dataIndex != 'operation'">
          <span :style="{ color: column.option.find(u => u.value == record[column.dataIndex]).color || '#fff' }">{{
            column.option.find(u => u.value == record[column.dataIndex]).label }}</span>
        </template>
        <template v-if="column.type == 'selectText' && column.dataIndex != 'operation'">
          <div class="selectTextView">
            <span v-for="(item, index) in column.option" :key="index"
              :style="{ color: item.value == record[column.dataIndex] ? item.color : '#BABABA' }">{{ item.label }}</span>
          </div>
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
import { reactive, computed, ref } from 'vue'
let emit = defineEmits(['rowClick'])
let props = defineProps({
  isForm: Boolean,
  scroll: Object,
  columns: Array,
  operationBtns: Array,
  total: Number,
  pageSize: Number,
  current: Number,
  isRowSelection: Boolean,
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

const customRow = (record, index) => {
  return {
    onClick: () => {
      emit('rowClick', record)
    },
  }
}

function handleTableChange(pagination, filters, sorter, { currentDataSource }) {
}
function handleFormClick(item, data) {
  console.log(item, data)
}
function changePage(page, pageSize) {

}
let selectedRowKeysArr = ref([])

function onSelectionChange(selectedRowKeys, selectedRows) {
  selectedRowKeysArr.value = []
  selectedRowKeys.map(key => {
    selectedRowKeysArr.value.push(key)
  })
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



  ::v-deep(.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked:not(.ant-checkbox-disabled) .ant-checkbox-inner) {
    border: 1px solid #02E6FF;
    background-color: transparent;
  }

  ::v-deep(.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked:not(.ant-checkbox-disabled):after) {
    border: 1px solid #02E6FF;

  }

  ::v-deep(.ant-checkbox-indeterminate .ant-checkbox-inner:after) {
    background-color: #fff;
  }

  ::v-deep(.ant-checkbox-wrapper) {


    .ant-checkbox-inner {
      background-color: transparent;
      border: 1px solid #02E6FF;
      border-radius: 2px;



      &:hover {
        border: 1px solid #02E6FF;
        background-color: transparent;

      }
    }


  }

  .spin {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btnItem {
    margin: 0 6px;
    color: #61FB23;
    padding: 4px 8px;
    margin: 0;
  }

  .selectTextView {
    span {
      padding: 0 4px;
    }
  }

  .Pagination {
    margin-top: 4px;
  }
}
</style>

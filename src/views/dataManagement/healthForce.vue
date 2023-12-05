<template>
  <Layout>
    <div class="healthForce">
      <BasicTable :isForm="true" :loading="loading" :total="20" :current="2" :pageSize="10"
        :columns="columns" :scroll="{ x: 1200, }" :data-source="data" :operationBtns="operationBtns">
        <template #action>
          <TableAction :actions="[{ label: '新增', }, { label: '导出' }]" @actionClick="handleActionClick">
          </TableAction>
        </template>
      </BasicTable>
    </div>
  </Layout>
</template> 
<script  setup>
import Layout from './components/layout.vue'
import { BasicTable, TableAction } from '@/components/Table'
import { ref, reactive } from 'vue'
import { columns } from './data/healthForce.js'
let operationBtns = ref([
  {
    label: '编辑',
    icon: 'el-icon-edit-outline',
    type: 'link',
    action: (record, column) => {

      Object.assign(addFormVal, record)
      // addForm.value = record
      openModal.value = true
      modalTitle.value = '编辑'

    },
  },
  {
    label: '删除',
    icon: 'el-icon-edit-outline',
    type: 'link',
    action: (record, column) => {
      openModal.value = true
      Object.assign(addFormVal, record)
      modalTitle.value = '删除'
    },
  },
])

let loading = ref(false)
// let columns = ref([])
let data = ref([
  {
    name: '测试'
  },
  {
    name: '测试'
  },
  {
    name: '测试'
  },
])
function handleActionClick() { }
</script>

<style lang='scss' scoped></style>
<template>
  <Layout>
    <div class="medicalEquipment">
      <BasicTable :isForm="true" :isRowSelection="true" :loading="loading" :total="2000" :current="2" :pageSize="10"
        :columns="columns" :scroll="{ x: 1200, }" :data-source="data" :operationBtns="operationBtns">
        <template #action>
          <TableAction
            :actions="[{ label: '新增', icon: 'img-icon/add.png' }, { label: '导入', icon: 'img-icon/daoru.png' }, { label: '删除', type: 'danger', icon: 'img-icon/shanchu.png' }]"
            @actionClick="handleActionClick">
          </TableAction>
        </template>
      </BasicTable>
    </div>
    <BasicModal :openModal="openModal" :modalTitle="modalTitle" @handleCancel="handleModalCancel">
      <span>请确认是否删除所选数据</span>
      <template #footer>
        <TableAction
          :actions="[{ label: '取消', icon: 'img-icon/add.png' }, { label: '删除', type: 'danger', icon: 'img-icon/shanchu.png' }]"
          @actionClick="handleModalClick">
        </TableAction>
      </template>
    </BasicModal>
  </Layout>
</template> 
<script  setup>
import Layout from './components/layout.vue'
import { BasicTable, TableAction } from '@/components/Table'
import { BasicModal } from '@/components/Modal'
import { ref, reactive } from 'vue'
import { columns } from './data/medicalEquipment.js'

let openModal = ref(true)
let modalTitle = ref('新增')

let operationBtns = ref([
  {
    label: '查看',
    icon: 'el-icon-edit-outline',
    type: 'text',
    action: (record, column) => {

      Object.assign(addFormVal, record)
      // addForm.value = record
      openModal.value = true
      modalTitle.value = '编辑'

    },
  },
  {
    label: '编辑',
    icon: 'el-icon-edit-outline',
    type: 'text',
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
    type: 'text',
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
    name: '测试',
    onState: '1',
  },
  {
    name: '测试',
    onState: '2'
  },
  {
    name: '测试',
    onState: '1'
  },
])
function handleActionClick() {
  console.log('llll')
  openModal.value = true
}
function handleModalClick() {
  openModal.value = false
}
function handleModalCancel() {
  openModal.value = false
}
</script>

<style lang='scss' scoped></style>
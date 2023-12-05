<template>
  <div>
    <a-form v-bind="$attrs" :layout="layout" :model="formState">
      <a-form-item v-for="schema in schemas" :key="schema.field" :label="schema.header" style="margin-bottom: 14px;">
        <a-input v-if="schema.type == 'text'" :placeholder="schema.placeholder" v-model:value="formState[schema.field]">
        </a-input>
        <a-select v-if="schema.type == 'select'" v-model:value="formState[schema.field]"
          :style="`width:${schema.width || '220px'} ;`" @change="selectChange($event, schema)">
          <a-select-option v-for="(item, index) in schema.option" :key="index" :value="item.value"> {{ item.label }}
          </a-select-option>
        </a-select>
        <!-- <selectPage v-if="schema.type == 'selectPage'">
        </selectPage> -->
        <a-range-picker v-if="schema.type == 'daterange'" valueFormat="YYYY-MM-DD" v-model:value="formState[schema.field]"
          style="width: 100%;" />
        <a-range-picker v-if="schema.type == 'datetimerange'" valueFormat="YYYY-MM-DD HH:mm:ss"
          v-model:value="formState[schema.field]" style="width: 100%;" show-time
          @change="datetimePickerChange($event, schema)" />
        <a-date-picker show-time v-if="schema.type == 'datetime'" valueFormat="YYYY-MM-DD HH:mm:ss"
          format="YYYY-MM-DD HH:mm:ss" v-model:value="formState[schema.field]" style="width: 100%;"
          @change="datetimePickerChange($event, schema)">
        </a-date-picker>
        <a-checkbox v-if="schema.type == 'radio'" v-model:checked="formState[schema.field]">{{ schema.radioText
        }}</a-checkbox>
      </a-form-item>
      <slot name="formitems"></slot>
      <div class=" flex justify-end">
        <TableAction :actions="[{ label: '搜索', icon: 'img-icon/search.png' }]" @actionClick="handleClick">
        </TableAction>
        <!-- <a-button type="primary" @click="handleSubmit"> 确认 </a-button> -->
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { BasicTable, TableAction } from '@/components/Table'
// import selectPage from '../../diy-components/selectPage.vue'
const emit = defineEmits(['update:modelValue', 'confirm', 'selectChange', 'datetimeChange'])
const props = defineProps({
  schemas: Array,
  modelValue: Object,
  layout: {
    type: String,
    default() {
      return 'inline'
    }
  },
})

const formState = ref({})

function handleClick(action) { 
  emit('confirm', action, formState.value)
}

function selectChange(e, item) {
  emit('selectChange', e, item)
}



watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    formState.value = newVal
  }
}, {
  deep: true,
  immediate: true
})
function datetimePickerChange(value, item) {
  emit('datetimeChange', value, item)
}
</script>

<style lang="scss" scoped>
.custom-button {
  &:hover {
    background-color: rgba(57, 174, 25, 0.8);
  }
}
</style>

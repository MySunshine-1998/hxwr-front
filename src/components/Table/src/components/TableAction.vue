<template>
  <div class="flex">
    <template v-for="(action, index) in actions" :key="index"> 
      <BasicButton :type="action.type" @click="btnClick(action)" :icon="action.icon" style="margin-right: 12px;"
        :label="action.label"> </BasicButton>
    </template>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { BasicButton } from '@/components/Button'
import { h } from 'vue';
const props = defineProps({
  actions: Array
})



const emit = defineEmits(['actionClick'])

function btnClick(action) {
  console.log(action)
  emit('actionClick', action)
}
</script>

<style lang="scss" scoped>
.flex {
  ::v-deep(.svg-icon) {
    margin-right: 10px;
  }
}

.custom-button {
  &:hover {
    background-color: rgba(57, 174, 25, 0.8);
  }
}
</style>

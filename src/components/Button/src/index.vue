<template>
  <a-button type="primary" :class="classVal" :danger="props.type == 'danger'" :icon="icon" @click="action">{{ props.label
  }}</a-button>
</template>

<script setup>
import { h, computed } from 'vue'
import SvgIcon from '../../SvgIcon/index.vue'
import { getAssetsFile } from '@/utils/index'
let props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'primary'
  },
  icon: String,
})
let emit = defineEmits(['action'])

let classVal = computed(() => {
  return [props.type + '-btn', 'buttonClass']
})


let icon = computed(() => {
  if (!props.icon) {
    return false
  } else if (props.icon && props.icon.indexOf('-') > -1) {
    return h('img', { src: getAssetsFile(`${props.icon.substring(props.icon.indexOf('-') + 1, props.icon.length)}`), class: 'icon-img' })
  } else if (props.icon && props.icon.indexOf('-') == -1) {
    return h(SvgIcon, { name: `${props.icon}`, class: 'icon-svg' })
  }
})

function action() {
  emit('action')
} 
</script>

<style lang="scss" scoped>
.buttonClass {
  display: flex;
  align-items: center;

  .icon-img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
} 
.primary-btn {

  &:hover {
    background-color: rgba(57, 174, 25, 0.8);
  }

}
</style>

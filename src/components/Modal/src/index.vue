<template>
    <a-modal class="modalView" v-bind="$attrs"  :open="propsVal.openModal"
        :title="propsVal.modalTitle" @cancel="handleCancel" @ok="handleOk">
        <template #footer>
            <div class="footerView">
                <slot name="footer"> </slot>
            </div>
        </template>
        <slot></slot>
    </a-modal>
</template>

<script setup>
import { reactive, ref, watch, computed } from 'vue'
const props = defineProps({
    openModal: Boolean,
    modalTitle: String,

})
let propsVal = reactive(props)
const emit = defineEmits(['handleOk', 'handleCancel'])
function handleCancel() { 
    emit('handleCancel')
}
function handleOk() {
    emit('handleOk')
}
</script>

<style lang='scss' scoped>
.footerView {
    padding: 12px;
    display: flex;
    justify-content: flex-end;
}
</style>
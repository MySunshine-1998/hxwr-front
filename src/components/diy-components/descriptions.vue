<template>
    <div class="descriptions">
        <a-descriptions bordered :column="props.column">
            <a-descriptions-item :labelStyle="{ width: '140px' }" :label="item.label" v-for="(item, index) in props.data"
                :key="index"><span v-html="item.value"></span></a-descriptions-item>
        </a-descriptions>
    </div>
</template> 
<script setup>
import { ref } from 'vue'
const props = defineProps({
    data: Array,
    column: Number
})
const value = ref(false)
</script>
<style scoped lang="scss">
.descriptions {
    ::v-deep(.ant-descriptions) {
        .ant-descriptions-item-label {
            border-inline-end: 1px solid #189A9B;
            padding: 8px 14px;
            color: rgba($color: #fff, $alpha: 0.7);
            text-align: right;

            &:last-child {
                border-inline-end: none;
            }
        }

        .ant-descriptions-row {
            border-bottom: 1px solid #189A9B;

            &:last-child {
                border-bottom: none;
            }
        }

        .ant-descriptions-item-content {
            border-inline-end: 1px solid #189A9B;
            color: rgba($color: #fff, $alpha: 0.7);
            padding: 8px 10px;

            &:last-child {
                border-inline-end: none;
            }
        }
    }
}
</style>


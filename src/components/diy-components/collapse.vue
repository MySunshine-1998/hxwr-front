<template>
    <a-collapse class="collapse" v-model:activeKey="activeKey" :expand-icon-position="'end'">
        <a-collapse-panel :key="index" v-for="(item, index) in props.collapseItems">
            <template #header>
                <div class="collapse-header">
                    <span class="header-bg"></span> <span class="header">{{ item.header }}</span>
                </div>
            </template>
            <descriptions :column="item.descriptionsColumn" :data="item.content"></descriptions>
        </a-collapse-panel>
    </a-collapse>
</template>
<script   setup>
import { ref, watch } from 'vue';
import descriptions from './descriptions.vue'

const props = defineProps({
    collapseItems: Array,
    activeKey: String
})
let activeKey = ref(props.activeKey)
</script>
<style scoped lang="scss">
.collapse {
    background-color: #004A3C;
    border-radius: 0px;
    border: none;

    ::v-deep(.ant-collapse-item) {
        border-radius: 0px;
        margin-bottom: 12px;
        border-bottom: none;


        .ant-collapse-header {
            background-color: #116C40;
            color: #fff;
            border-radius: 0px;
        }

        .collapse-header {
            display: flex;
            align-items: center;

            .header-bg {
                display: block;
                height: 20px;
                width: 6px;
                background-color: #B4F08B;
                margin-right: 10px;
            }

            span {
                font-size: 18px;
            }
        }

        .ant-collapse-content {
            background: none;
            border-top: none;

            .ant-collapse-content-box {
                border: 1px solid #189A9B;
                border-top: none;
                color: #fff;
                padding: 0;
            }
        }
    }

}
</style>
  
  
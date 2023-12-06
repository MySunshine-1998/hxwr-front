<template>
    <Layout>
        <div class="searchView">
            <inputSearch @search="search" :keywords="['阿维菌素', '富马酸二甲酯', '甲醇', '焦磷酸钾', '拉米夫定', '硫化钠']"></inputSearch>
        </div>
        <div class="tableList">
            <div class="tableView" v-if="isdetails">
                <div class="header">

                </div>
                <BasicTable :isForm="false" :loading="loading" :isRowSelection="false" :total="2000" :current="2"
                    :pageSize="10" :columns="columns" :scroll="{ y: 530, }" :data-source="data"
                    :operationBtns="operationBtns" rowKey="id" @rowClick="handleRowClick">
                </BasicTable>
            </div>
            <div class="detailsView" v-else>
                <div class="breadcrumbView">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item>搜索结果</a-breadcrumb-item>
                        <a-breadcrumb-item>详情</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="collapseList">
                    <Collapse :collapseItems="collapseItems" :activeKey="['0', '1']"></Collapse>
                </div>
            </div>
            <div class="listView">
                <p>ZZ条例</p>
                <div class="listItem" v-for="(item, index) in listItems" :key="index">
                    <p>{{ index + 1 }}. {{ item.label }}</p>
                </div>
            </div>
        </div>
    </Layout>
</template> 
<script  setup>
import Layout from './components/layout.vue'
import { BasicTable, TableAction, } from '@/components/Table'
import inputSearch from '../../components/diy-components/inputSearch.vue'
import Collapse from '../../components/diy-components/collapse.vue'
import { ref, reactive, h, onMounted } from 'vue'
import { columns } from './data.js'
import { getChemical, getChemicalDetail } from '@/api/chemical/index.js'
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
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
    {
        name: '测试'
    },
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

let listItems = ref([
    {
        label: '危险化学品目录（2015版）',

    },
    {
        label: '高毒物品目录（2003年版）',

    },
    {
        label: '民用爆炸物品品名表',

    },
    {
        label: '重点监管的危险化学品名录',

    },
    {
        label: '危险货物品名表',

    },
    {
        label: '易制爆危险化学品目录（2017版）',

    },
    {
        label: '易制毒化学品的分类和品种目录',

    },
    {
        label: '有机过氧化物分类及品名表',

    },
])

let collapseItems = ref([
    {
        header: '基本信息',
        descriptionsColumn: 2,
        content: [
            {
                label: '中文名称',
                value: '硝酸铵，硝酸铵，硝铵',
            },
            {
                label: '英文名称',
                value: 'ammonium nitrate；ammonium saltpeter',
            },
            {
                label: 'CAS号',
                value: 'CAS号',
            },
            {
                label: 'UN号',
                value: '1942,0222',
            },
            {
                label: '登记企业数',
                value: '103',
            },
            {
                label: '更新时间',
                value: '2022-01-24',
            },
        ]
    },
    {
        header: '标签要素',
        descriptionsColumn: 1,
        content: [
            {
                label: '危险性类别',
                value: '氧化固体-类别3，特异性靶器官毒性-一次接触-类别1，特异性靶器官毒性-反复接触-类别1',
            },
            {
                label: 'GHS警示词',
                value: '危险',
            },
            {
                label: 'GHS分类来源',
                value: '实施指南',
            },
            {
                label: '象形图',
                value: '箱型图',
            },
            {
                label: '危险性说明',
                value: `H372:长时间或反复接触（如果可确证无其他接触途径引起该危害，说明接触途径）对器官造成伤害（如果已经知道，说
明所受损损害的器官）  H272:可加剧燃烧；氧化剂H370:对器官造成损害（如果知道，说明所受损的器官）（如果可确证
无其他接触途径引起危害，说明接触途径）`,
            },
        ]
    },
    {
        header: '理化特征',
        descriptionsColumn: 2,
        content: [
            {
                label: '中文名称',
                value: '硝酸铵，硝酸铵，硝铵',
            },
            {
                label: '英文名称',
                value: 'ammonium nitrate；ammonium saltpeter',
            },
            {
                label: 'CAS号',
                value: 'CAS号',
            },
            {
                label: 'UN号',
                value: '1942,0222',
            },
            {
                label: '登记企业数',
                value: '103',
            },
            {
                label: '更新时间',
                value: '2022-01-24',
            },
        ]
    },
    {
        header: '危害信息',
        descriptionsColumn: 2,
        content: [
            {
                label: '中文名称',
                value: '硝酸铵，硝酸铵，硝铵',
            },
            {
                label: '英文名称',
                value: 'ammonium nitrate；ammonium saltpeter',
            },
            {
                label: 'CAS号',
                value: 'CAS号',
            },
            {
                label: 'UN号',
                value: '1942,0222',
            },
            {
                label: '登记企业数',
                value: '103',
            },
            {
                label: '更新时间',
                value: '2022-01-24',
            },
        ]
    },
])

onMounted(() => {
    getChemicalData()
})
function getChemicalData() {
    getChemical().then(res => {
        if (res.length > 0) {
            data.value = res.map((item, index) => {
                return {
                    ...item,
                    key: index + 1

                }
            })
        }
    })
}
let isdetails = ref(true)
function handleActionClick() { }
function search(val) {
    console.log(val)
}
function handleRowClick(record) {
    console.log(record)
    getChemicalDetailData(record.id)
}
function getChemicalDetailData(id) {
    getChemicalDetail({
        id
    }).then(res => {
        console.log(res) 
    })
}

</script>
  
<style lang='scss' scoped>
.tableList {
    width: 90%;
    margin: 0 auto;
    display: flex;
    height: calc(100% - 100px);

    .tableView,
    .detailsView {
        width: calc(100% - 360px);
        margin-right: 20px;
    }

    .detailsView {
        padding-top: 26px;

        .breadcrumbView {
            height: 34px;
            display: flex;
            align-items: center;
            background-color: #378665;
            padding-left: 20px;

            li {
                list-style: none;
                color: #fff;
                font-size: 14px;

                ::v-deep(.ant-breadcrumb-separator) {
                    margin: 4px;
                    color: #fff;
                }
            }
        }

        .collapseList {

            height: calc(100% - 30px);
            overflow: auto;
        }


    }

    .listView {
        width: 340px;
        height: 560px;
        background: #183824;
        border: 1px solid #189A9B;
        margin-top: 24px;
        padding: 20px;
        overflow: auto;

        &>p {
            height: 19px;
            font-size: 18px;

            font-weight: 400;
            color: #FFFFFF;
        }

        .listItem {
            color: #BAFF8C;
            font-size: 16px;
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>
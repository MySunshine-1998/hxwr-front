<template>
    <div class="menuView"> 
        <a-menu :selectedKeys="[menuStore.getCurSideMenu]" :openKeys="[menuStore.getCurSideOpenKey]" mode="inline"
            :items="items" class="menu" @click="handleSelect" >
        </a-menu>
    </div>
</template>
  
<script setup>
import { ref, h, reactive, watch, onMounted, computed } from 'vue'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { useMenuStore } from '@/store/modules/menu'
const menuStore = useMenuStore()
const router = useRouter()
const route = useRoute()

onMounted(() => {
    menuStore.setCurHeaderMenu(route.matched[0].name)
    menuStore.setCurSideMenu(route.name)
    menuStore.setCurSideOpenKey(route.matched[0].name)
})
const items = computed(() => { 
    return menuStore.getSideMenuList
})

function handleSelect({ item, key, keyPath }) { 
    menuStore.setCurSideMenu(key)
    menuStore.setCurSideOpenKey(keyPath[0]) 
    router.push({
        name: item.name
    })
}
</script>
  
<style lang="scss" scoped>
.menuView { 
    height: calc(100% - 18px); 

}
</style>
  
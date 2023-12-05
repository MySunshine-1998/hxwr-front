<template>
    <div class="headerView"> 
        <Header></Header>
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>

<script  setup> 
import Header from '../components/diy-components/header.vue' 

</script>

<style lang="scss" scoped>
.headerView {
    height: 100vh;
    position: relative; 

    .routerView {
        width: 100%;
        height: calc(100% - 58px);
        position: absolute;
        top: 58px;
    }
}
</style>
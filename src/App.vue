<script setup>
import { RouterView } from 'vue-router'
import { ConfigProvider, theme } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import antdTheme from '@/assets/style/antdTheme.js' 
</script>

<template>
  <ConfigProvider :locale="zhCN" :theme="antdTheme">
    <RouterView />
  </ConfigProvider>
</template>
<style src="./assets/style/antdStyle.scss"> </style>
<!--
 * @Author: sunyue
 * @Date: 2023-12-06 13:53:01
 * @LastEditors: sunyue
 * @LastEditTime: 2023-12-06 15:03:43
 * @Description: 描述
 * Copyright (c) 2023 by 中国科学院软件研究所, All Rights Reserved. 
-->
<template>
  <div class="popup-wrapper">
    <p>WQ名称：{{ pollutant.WQName }}</p>
    <p>死伤范围：{{ pollutant.deathRange }}</p>
    <p>中心浓度：{{ pollutant.centerConcentration }}/m3</p>
    <p>已扩散范围：{{ pollutant.spreadRange }}</p>
    <p>投放时间：{{ pollutant.marketTime }}</p>
    <p>扩散速度：{{ pollutant.spreadSpeed }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['pollutant'])
const pollutant = props.pollutant
</script>

<style lang="scss" scoped>
.popup-wrapper {
  width: 164px;
  height: 132px;
  background: #0c2119;
  border: 1px solid #085d3c;
  opacity: 0.66;
  border-radius: 6px;
  padding: 18px;
  p {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: #ffffff;
    line-height: 16px;
    margin: 0;
  }
}
</style>

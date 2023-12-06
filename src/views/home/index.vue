<!--
 * @Author: sunyue
 * @Date: 2023-12-04 08:40:01
 * @LastEditors: sunyue
 * @LastEditTime: 2023-12-06 21:39:54
 * @Description: 描述
 * Copyright (c) 2023 by 中国科学院软件研究所, All Rights Reserved. 
-->
<template>
  <div class="map-container" id="map"></div>
  <popup :pollutant="pollutantDetail" ref="overlayRef" v-show="isShowPopup"></popup>
</template>

<script setup>
import 'ol/ol.css'
import mapUtils from '@/utils/map'
import { onMounted, ref, unref } from 'vue'
import { Style, Circle, Fill, Stroke, Icon } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import { getPollutantCoordinates } from '@/api/coordinate'
import { Overlay } from 'ol'
import popup from './components/popup.vue'
const map = ref({})
const pollutantDetail = ref({
  WQName: '',
  deathRange: '',
  centerConcentration: '',
  spreadRange: '',
  marketTime: '',
  spreadSpeed: ''
})
const overlayRef = ref(null)
const createOverlay = function() {
  const popup = new Overlay({
    element: overlayRef.value.$el,
    positioning: "bottom-left",
    stopEvent: false,
    offset: [70, -40],
  })
  return popup
}
const isShowPopup = ref(false)

onMounted(() => {
  map.value = mapUtils.createMap({
    element: document.querySelector('#map'),
    center: [116.23, 39.54]
  })
  const popup = createOverlay();
  map.value.addOverlay(popup)
  const layerStyleFunction = function (feature) {
    const type = feature.get('type')
    let style
    if (type == 'miniPoint') {
      style = new Style({
        image: new Circle({
          radius: 20,
          fill: new Fill({
            color: 'yellow'
          }),
          stroke: new Stroke({
            color: '#333',
            width: 2
          })
        })
      })
    } else if (type == 'circle') {
      style = new Style({
        image: new Circle({
          radius: 100,
          stroke: new Stroke({
            color: 'yellow',
            width: 2,
            lineDash: [5, 5]
          })
        })
      })
    } else {
      style = new Style({
        image: new Icon({
          src: '/map/virus.png',
          width: 40,
          height: 56
        })
      })
    }
    return [style]
  }

  const coordinates = [[116.23, 39.54]]
  const { source, layer, features: virusFeatures } = mapUtils.addPointsToMap(
    coordinates.map((coodinate) => fromLonLat(coodinate)),
    map
  )
  virusFeatures.forEach(feature => {
    feature.set('type', 'virus')
  })
  layer.setStyle(layerStyleFunction)

  const { features: circleFeatures } = mapUtils.addCircleToSource(
    [[116.23, 39.54]].map((coodinate) => fromLonLat(coodinate)), 100,
    source
  )
  circleFeatures.forEach((feature) => {
    feature.set('type', 'circle')
  })
  // getPollutantCoordinates({ coordinate: coordinates[0], radius: 100 }).then((coordinates) => {
  //   const { features: pollutantFeatures } = mapUtils.addPointsToSource(
  //     coordinates.map((coodinate) => fromLonLat(coodinate)), source
  //   )
  //   pollutantFeatures.forEach((feature) => {
  //     feature.set('type', 'miniPoint')
  //   })
  // })

  map.value.on('singleclick', (e) => {
    const feature = map.value.forEachFeatureAtPixel(
      e.pixel,
      (feature) => feature
    )
    if(feature && feature.get('type') == 'virus') {
      isShowPopup.value = true;
      const coodinate = feature.getGeometry().getCoordinates();
      popup.setPosition(coodinate)
    } else {
      isShowPopup.value = false;
    }
  })

  const scale = mapUtils.getScale(unref(map))
  console.log(scale);
})
</script>

<style lang="scss" scoped>
.map-container {
  height: 100vh;
}
</style>

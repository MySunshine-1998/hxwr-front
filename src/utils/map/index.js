import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { Map, View, Feature } from 'ol'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import { unref } from 'vue';
import { Circle, Point, Polygon, } from 'ol/geom'
import Draw, { createBox } from 'ol/interaction/Draw';
import ScaleLine from 'ol/control/ScaleLine'

/**
 * @description: 创建地图
 * @param {*} element
 * @param {*} center
 * @return {*} 地图实例
 */
export function createMap({ element, center }) {
    return new Map({
        target: element,
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'http://172.16.10.140/tms/sim/server/{z}/{x}/{y}.png'
                })
            })
        ],
        view: new View({
            center: fromLonLat(center),
            zoom: 10
        }),
        controls: []
    })
}
/**
 * @description: 创建点
 * @param {*} coordinate 坐标
 * @return {*} point 
 */
export function createPoint(coordinate) {
    const point = new Point(coordinate)
    return point
}
/**
 * @description: 将坐标添加到矢量源中
 * @param {*} points 坐标集合
 * @return {*} 矢量源
 */
export function addPointsToSource(points, source = new VectorSource()) {
    const features = points.map(point => {
        return new Feature({
            geometry: createPoint(point),
        })
    })
    source.addFeatures(features)
    return { source, features }
}


export function addCircleToSource(circles, radius, source = new VectorSource()) {
    const features = circles.map(circle => {
        return new Feature({
            geometry: new Circle(circle, radius)
        })
    })
    source.addFeatures(features)
    return { source, features }
}


/**
 * @description: 将矢量源添加到图层中
 * @param {*} source 矢量源
 * @return {*} layer
 */
export function addSourceToLayer(source) {
    const layer = new VectorLayer({
        source
    })
    return layer
}
/**
 * @description: 将图层添加到地图中
 * @param {*} layer 图层
 * @param {*} map 地图
 * @return {*}
 */
export function addLayerToMap(layer, map) {
    map = unref(map)
    map.addLayer(layer)
}
/**
 * @description: 将点坐标添加到地图中
 * @param {*} points 点坐标
 * @param {*} map 地图实例
 * @return {*} source和layer
 */
export function addPointsToMap(points, map) {
    const { source, features } = addPointsToSource(points)
    const layer = addSourceToLayer(source)
    addLayerToMap(layer, map)
    return {
        source,
        layer,
        features
    }
}
/**
 * @description: 移除矢量源上面的feature
 * @param {*} feature 特征
 * @param {*} source 矢量源
 * @return {*} Boolean 移除结果
 */
export function removeFeatureFromSource({ feature, source }) {
    if (source.hasFeature(feature)) {
        source.removeFeature(feature)
        return true;
    } else {
        console.log('无此feature');
        return false;
    }
}

export function drawCircle(source) {
    return new Draw({
        type: 'Circle',
        source,
        geometryFunction: createBox
    })
}

export function getScale(map) {
    return map.geView().
}


export function clearSource() { }

export function clearLayer() { }

export default {
    createMap,
    createPoint,
    addPointsToSource,
    addSourceToLayer,
    addLayerToMap,
    addPointsToMap,
    removeFeatureFromSource,
    drawCircle,
    getScale,
    addCircleToSource
}
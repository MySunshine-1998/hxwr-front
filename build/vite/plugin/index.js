import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import purgeIcons from 'vite-plugin-purge-icons'
import windiCSS from 'vite-plugin-windicss'
import { configHtmlPlugin } from './html'
import { configCompressPlugin } from './compress'
import { configPwaConfig } from './pwa'
import { configImageminPlugin } from './imagemin'
import { configSvgIconsPlugin } from './svgSprite'

export function createVitePlugins(viteEnv, isBuild) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv

  const vitePlugins = [
    // 提供 Vue 3 单文件组件支持
    vue(),
    // 提供 Vue 3 JSX 支持
    vueJsx(),
    configHtmlPlugin(viteEnv, isBuild)
  ]

  // vite-plugin-windicss
  vitePlugins.push(windiCSS())

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons())

  // 为打包后的文件提供传统浏览器兼容性支持
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  if (isBuild) {
    // vite-plugin-imagemin
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    )

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv))
  }

  return vitePlugins
}

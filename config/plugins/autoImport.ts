import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

export const configAutoImportPlugin = AutoImport({
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
  imports: ['vue', 'vue-router'],
  dts: 'src/types/auto-import.d.ts',
  resolvers: [
    ElementPlusResolver(),
    IconsResolver({
      prefix: 'Icon'
    })
  ],
})

export const configComponentsImport = Components({
  dirs: ['src/layout'],
  resolvers: [
    ElementPlusResolver(),
    IconsResolver({
      enabledCollections: ['ep'],
    }),
  ],
  extensions: ['vue', 'tsx'],
  dts: 'src/types/components.d.ts',
})

export const configIconsImport = Icons({
  autoInstall: true,
})

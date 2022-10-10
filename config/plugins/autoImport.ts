import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export const configAutoImportPlugin = AutoImport({
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
  imports: ['vue', 'vue-router'],
  dts: 'src/types/auto-import.d.ts',
  resolvers: [ElementPlusResolver()],
})

export const configComponentsImport = Components({
  dirs: ['src/layout'],
  resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
  extensions: ['vue', 'tsx'],
  dts: 'src/types/components.d.ts',
})
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configAutoImportPlugin, configComponentsImport } from './autoImport'

export const vitePlugins: (Plugin | Plugin[])[] = [
  vue(),
  configAutoImportPlugin,
  configComponentsImport,
]

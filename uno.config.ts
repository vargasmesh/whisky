// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetTagify, transformerDirectives, presetIcons } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
    transformers: [transformerDirectives()],
    presets: [presetTagify(), presetIcons(), presetUno(), presetAttributify(),  presetScrollbar()],
  });

// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetTagify from "@unocss/preset-tagify";
import transformerDirectives from "@unocss/transformer-directives";
import presetIcons from "@unocss/preset-icons";
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
    transformers: [transformerDirectives()],
    presets: [presetTagify(), presetIcons(), presetUno(), presetAttributify(),  presetScrollbar()],
  });

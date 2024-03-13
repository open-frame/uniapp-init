import { defineConfig, presetIcons } from 'unocss'

// unocss-applet https://github.com/unocss-applet/unocss-applet
import { presetApplet, presetRemRpx, transformerApplet } from 'unocss-applet'

export default defineConfig({
  presets: [
    presetApplet(),
    presetRemRpx(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerApplet(),
  ],
})
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

import {
	presetApplet,
	presetRemRpx,
	transformerApplet,
	transformerAttributify,
} from 'unocss-applet'


export default defineConfig({
	presets: [
		presetApplet(),
		presetAttributify(),
		presetRemRpx(),
		// 支持图标，需要搭配图标库，eg: @iconify-json/carbon, 使用 `<button class="i-carbon-sun dark:i-carbon-moon" />`
		presetIcons({
			scale: 1.2,
			warn: true,
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
			},
		}),
	],
	/**
	 * 自定义快捷语句
	 * @see https://github.com/unocss/unocss#shortcuts
	 */
	shortcuts: [
		['flex-center', 'flex justify-center items-center'],
		['grid-center', 'flex justify-center items-center']
	],
	transformers: [
		// 启用 @apply 功能
		transformerDirectives(),
		// 启用 () 分组功能
		// 支持css class组合，eg: `<div class="hover:(bg-gray-400 font-medium) font-(light mono)">测试 unocss</div>`
		transformerVariantGroup(),
		// Don't change the following order
		transformerAttributify({
			// 解决与第三方框架样式冲突问题
			prefixedOnly: true,
			prefix: 'fg',
		}),
		transformerApplet(),
	]
})

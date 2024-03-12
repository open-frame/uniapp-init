<script setup>
	import UpdateMonitor from '@/utils/update-monitor.js';
	import sceneInfo from '@/utils/scene-info.js';
	import { useThemeStore } from '@/store/index.js'

	onLaunch((options) => {
		// console.log(options);
		console.log('App Launch')
	})
	onShow((options) => {
		// console.log(options);
		console.log('App Show')
		UpdateMonitor()
		const scene = sceneInfo(options.scene);
		console.log(scene);
	})
	onHide(() => {
		console.log('App Hide')
	})

	onPageNotFound(() => {
		uni.reLaunch({
			url: "/pages/index/index"
		});
	})
	onThemeChange((e) => {
		console.log("系统主题：", e);
		const themeStore = useThemeStore()
		themeStore.setTheme(e.theme)
	})
</script>

<style></style>
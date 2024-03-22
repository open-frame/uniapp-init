<template>
	<view class="">🍍控制台看看pinia输出</view>
</template>

<script setup>
	// https://uniapp.dcloud.net.cn/tutorial/platform.html
	// #ifdef MP-WEIXIN
	// 因为这个接口是微信特有的，所以只能在微信小程序中运行
	import {
		useSystemStore,
		useCustomStore,
		useProgramStore,
		useThemeStore
	} from '@/store/index.js'

	const systemInfoStore = useSystemStore()
	const customInfoStore = useCustomStore()
	const programInfoStore = useProgramStore()
	const themeStore = useThemeStore()

	console.log(systemInfoStore.systemInfo);
	console.log(programInfoStore.programInfo);
	console.log(customInfoStore.customInfo);
	console.log(themeStore.themeInfo);
	// #endif
</script>

<style scoped lang="scss"></style>
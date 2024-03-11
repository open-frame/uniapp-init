<template>
	<view class="">🍍控制台看看pinia输出</view>
</template>

<script setup>
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
</script>

<style scoped lang="scss"></style>
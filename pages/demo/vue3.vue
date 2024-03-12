<template>
	<view>{{ title }}</view>
	<view>{{ msg }}</view>
	<view>{{ data.msg }}</view>
	<view>{{ data.info }}</view>
	<view class="text-red">{{ msg2 }}</view>
</template>

<script setup>
	let title = ref("哈哈哈哈")
	let msg = reactive("嗯")
	let msg2 = reactive("行行行")
	const data = toRefs(reactive({}))
	
	onLoad((options) => {
		console.log("111");
		title.value = "看看看看"
		msg = "好"
	})
	onShow(() => {
		console.log("222");
		data.msg = "666" // 动态key
		console.log(data.msg);
	})
	
	
	data.info = "999" // 动态key
	console.log(data.info);
</script>

<style scoped lang="scss"></style>
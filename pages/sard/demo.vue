<template>
	<sar-progress-circle :percent="75" />
	<sar-empty />

	<sar-button @click="visible = !visible" root-style="margin-bottom: 20rpx">
		{{ visible ? '折叠' : '展开' }}
	</sar-button>

	<sar-collapse :visible="visible">
		<view style="padding: 20rpx; background-color: var(--sar-tertiary-bg)">
			<view v-for="index in 9" :key="index">collapse {{ index }}</view>
		</view>
	</sar-collapse>
</template>

<script setup>
	/**
	 * author        全易
	 * time          2024-03-12 11:17:41
	 * description   
	 */

	const visible = ref(false)
</script>

<style lang="scss" scoped>

</style>
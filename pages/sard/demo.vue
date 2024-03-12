<template>
	<sar-button type="outline" @click="visible = !visible" root-style="margin-bottom: 20rpx">
		{{ visible ? '折叠' : '展开' }}
	</sar-button>

	<sar-collapse :visible="visible">
		<view style="padding: 20rpx; background-color: var(--sar-tertiary-bg)">
			<view v-for="index in 9" :key="index">collapse {{ index }}</view>
		</view>
	</sar-collapse>

	<sar-calendar v-model="value" />
	<sar-slider v-model="slider" />
	<sar-rate :model-value="2.5" allow-half void-text="好" text="好" />

	<sar-dialog-agent />
	<sar-list card>
		<sar-list-item arrow hover title="显示提示框" @click="showAlert" />
		<sar-list-item arrow hover title="显示确定框" @click="showConfirm" />
		<sar-list-item arrow hover title="无标题" @click="showConfirmNoTitle" />
	</sar-list>
</template>

<script setup>
	/**
	 * author        全易
	 * time          2024-03-12 11:17:41
	 * description   
	 */
	import { dialog } from 'sard-uniapp'


	const visible = ref(false)
	const value = ref(new Date())
	const slider = ref(66)

	const showAlert = () => {
		dialog.alert({
			title: '提示',
			message: '给你看看，出来了',
		})
	}

	const showConfirm = () => {
		dialog.confirm({
			title: '提示',
			message: '确定删除？',
		})
	}

	const showConfirmNoTitle = () => {
		dialog.confirm({
			message: '孤村落日残霞，轻烟老树寒鸦，一点飞鸿影下。青山绿水，白草红叶黄花。',
		})
	}
</script>

<style lang="scss" scoped>

</style>
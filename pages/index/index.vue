<template>
	<fui-grid :columns="2">
		<fui-grid-item v-for="(item,index) in gridview" :key="index" @tap="toPage(item.path)">
			<view class="flex justify-center items-center h-full">
				<view class="text-center">
					<image src="/static/tabbar/my-1.png" style="height: 30px; width: 30px;"></image>
					<view>{{ item.title }}</view>
				</view>
			</view>
		</fui-grid-item>
	</fui-grid>


</template>

<script setup>
	onShareAppMessage(() => {})
	onShareTimeline(() => {})


	const gridview = [{
			path: '/pages/demo/vue3',
			title: 'vue3',
			icon: ""
		},
		{
			path: '/pages/demo/pinia',
			title: 'pinia',
			icon: ""
		},
		{
			path: '/pages/demo/unocss',
			title: 'unocss',
			icon: ""
		},
		{
			path: '',
			title: '沙漏',
			icon: ""
		},
		{
			path: '',
			title: '首页',
			icon: ""
		},
		{
			path: '',
			title: '音量',
			icon: ""
		}
	]

	function toPage(url) {
		if (!url) {
			return
		}

		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss" scoped></style>
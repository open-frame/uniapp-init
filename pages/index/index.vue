<template>
	<sar-button>按钮</sar-button>
	<sar-grid :columns="2" square gap="20rpx">
		<sar-grid-item v-for="(item,index) in gridview" :key="index" @tap="toPage(item.path)">
			<view class="modlus">
				<sar-icon :name="item.icon" />
				<view class="grid-box">{{ item.title }}</view>
			</view>
		</sar-grid-item>
	</sar-grid>

</template>

<script setup>
	onShareAppMessage(() => {})
	onShareTimeline(() => {})

	// wx.login({
	// 	success(e){
	// 		console.log(e.code);
	// 	}
	// })
	const gridview = [{
			path: '/pages/demo/vue3',
			title: 'vue3',
			icon: "image"
		},
		{
			path: '/pages/demo/pinia',
			title: 'pinia',
			icon: "image"
		},
		{
			path: '/pages/demo/form',
			title: 'form',
			icon: "image"
		},
		{
			path: '',
			title: '沙漏',
			icon: "image"
		},
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

<style lang="scss" scoped>
	.modlus {
		height: -webkit-fill-available;
		width: -webkit-fill-available;
		background-color: #f0f8ff;
		padding: 58px;
		text-align: center;
	}
</style>
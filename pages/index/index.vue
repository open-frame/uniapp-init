<template>
	<sar-notice-bar>{{ description }}</sar-notice-bar>
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



	const description = `
		欢迎使用【vue3-uniapp-init】
			⩥采用vue3技术栈，setup语法糖编码方式
			⩥引入sard-uniapp组件库
			⩥搭配unocss量子化样式引擎，降低自己写css工作量，根据class动态生成css代码
			⩥全局请求入口已封装，使用时自己封装业务接口即可，pages/requset 有案例
			⩥小程序打开场景封装，轻松拿到小程序是从哪里打开的
			⩥配置pinia状态管理器
			⩥配置api自动化引入（vue api、uniapp api），解放双手import
			⩥已封装程序升级检测，新发布小程序会提醒用户升级
			⩥简单提供项目分包案例 pages/status、pages/demo 等
	`;

	const gridview = [{
			path: '/pages/demo/vue3',
			title: 'vue3',
			icon: "record-circle"
		},
		{
			path: '/pages/demo/pinia',
			title: 'pinia',
			icon: "person"
		},
		{
			path: '/pages/demo/form',
			title: 'form',
			icon: "file"
		},
		{
			path: '/pages/demo/unocss',
			title: 'unocss',
			icon: "star"
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
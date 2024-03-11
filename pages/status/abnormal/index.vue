<template>
	<view class="bg-white margin padding radius text-center">
		<image :src="img" mode="widthFix" style="width: 100%;"></image>
		<view class="margin-top-xl text-bold text-xl">{{ explain }}</view>
		<view class="margin-top-xl" v-if="content">{{ content }}</view>
		<rich-text class="text-gray" v-if="html" :nodes="html"></rich-text>
		<view class="margin-top-xl flex align-center justify-around">
			<button class="cu-btn round line-green" @tap="goPage('/pages/other/server')">联系客服</button>
			<button class="cu-btn round line-red" type="warn" plain @tap="resetLogin">重新登录</button>
		</view>
	</view>
</template>

<script>
	/**
	 * author        全易
	 * time          2023-04-18 15:35:06
	 * description   异常告知
	 */
	export default {
		name: '',
		data() {
			return {
				img: "",
				html: "",
				explain: "",
				back: true
			}
		},
		onLoad(option) {
			this.html = option.html;
			this.explain = option.explain || "哎呀～  服务异常了";
			this.content = option.content;
			this.img = option.img || "./warning.png";
			this.back = option.back;
			if (!this.back) {
				uni.hideHomeButton()
			}
		},
		methods: {
			async resetLogin() {
				uni.clearStorageSync();
				const data = await logon();
				if (!data.userId) return;

				uni.reLaunch({
					url: `/pages/index/index`
				})
			},
			goPage(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
</style>
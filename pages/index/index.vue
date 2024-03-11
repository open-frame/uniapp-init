<template>
	<view class="m-5">
		<button plain type="primary" @tap="toPage('/pages/demo/unocss')">unocss demo</button>
		<button plain type="primary" @tap="toPage('/pages/demo/vue3')" class="mt-3">vue3 demo</button>
		<button plain type="primary" @tap="toPage('/pages/demo/pinia')" class="mt-3">pinia demo</button>
	</view>
</template>

<script setup>
	onShareAppMessage(() => {})
	onShareTimeline(() => {})

	function toPage(url) {
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss" scoped></style>
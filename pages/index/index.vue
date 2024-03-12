<template>
	<button plain type="primary" @tap="toPage('/pages/demo/vue3')" class="mt-3">vue3 demo</button>
	<button plain type="primary" @tap="toPage('/pages/demo/pinia')" class="mt-3">pinia demo</button>
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

<style lang="scss" scoped>
	.mt-3{
		margin-top: 15px;
	}
</style>
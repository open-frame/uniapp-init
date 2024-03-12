<template>
	<button plain type="primary" @tap="toPage('/pages/demo/vue3')" class="mt-3">vue3 demo</button>
	<button plain type="primary" @tap="toPage('/pages/demo/pinia')" class="mt-3">pinia demo</button>
	<u-tag text="标签" plain size="mini" type="warning"></u-tag>
	<up-button type="primary" text="确定"></up-button>
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
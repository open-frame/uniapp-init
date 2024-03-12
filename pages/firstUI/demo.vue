<template>
	<button plain @tap="dialogShow=true">打开dialog</button>
	<fui-dialog :show="dialogShow"  title="我是标题" content="我是自定义的对话框！" maskClosable @click="dialogShow=false" @close="dialogShow=false"></fui-dialog>
</template>

<script setup>
	/**
	 * author        全易
	 * time          2024-03-12 11:17:41
	 * description   
	 */

	const dialogShow = ref(false);

</script>

<style lang="scss" scoped>

</style>
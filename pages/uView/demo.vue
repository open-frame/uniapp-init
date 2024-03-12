<template>
	<up-keyboard ref="uKeyboard" mode="car" :show="carshow"  @confirm="carshow=false" @cancel="carshow=false" @change="carchange"></up-keyboard>
	<up-button @click="carshow = true">打开选车牌</up-button>
	
	<u-modal :show="modalshow" title="标题" content='uview-plus的目标是成为uni-app生态最优秀的UI框架' @confirm="modalshow=false"></u-modal>
	<u-button @click="modalshow = true">打开modal</u-button>
</template>

<script setup>
	/**
	 * author        全易
	 * time          2024-03-12 11:17:41
	 * description   
	 */

	const carshow = ref(false);
	const modalshow = ref(false);
	
	function carchange(data){
		console.log(data);
	}
</script>

<style lang="scss" scoped>

</style>
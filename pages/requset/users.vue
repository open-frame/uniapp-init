<template>
	<button plain @tap="getUsers">获取用户列表</button>
	<view class="mt-3">共计：{{ total }}</view>

	<sar-list v-if="pageData.length>0">
		<sar-list-item v-for="(item,index) in pageData">
			<image :src="item.avatar" mode="widthFix" style="width: 50px;"></image>
			<view class="">{{ item.username }}</view>
		</sar-list-item>
	</sar-list>

	<sar-empty v-else />
</template>

<script setup>
	import {
		users
	} from "./api.js"


	let pageData = reactive([])
	const total = ref(0);

	function getUsers() {
		pageData=[];
		users({
			pageNo: 1,
			pageSize: 20
		}).then(res => {
			pageData = res.data.pageData
			total.value = res.data.total
		})
	}
</script>

<style scoped>
</style>
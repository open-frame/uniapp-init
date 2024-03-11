<template>
	<div class="m-5">
		<button plain @tap="getUsers">获取用户列表</button>
		<view class="mt-3">共计：{{ total }}</view>
		<view class="flex justify-between" v-for="(item,index) in pageData">
			<image :src="item.avatar" mode="widthFix" style="width: 50px;"></image>
			<view class="text-end">
				<view class="">{{ item.username }}</view>
				<text class="mr-1" v-for="(role,index) in item.roles">{{ role.name }}</text>
			</view>
		</view>
	</div>
</template>

<script setup>
	import {
		users
	} from "./api.js"



	let {
		pageData,
		total
	} = toRefs(reactive({
		pageData: [],
		total: ""
	}))

	function getUsers() {
		users({
			pageNo: 1,
			pageSize: 20
		}).then(res => {
			pageData.value = res.data.pageData
			total.value = res.data.total
		})
	}
</script>

<style scoped>
</style>
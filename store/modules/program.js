import { defineStore } from 'pinia'
// #ifdef MP-WEIXIN
	// 因为这个接口是微信特有的，所以只能在微信小程序中运行
const data = uni.getAccountInfoSync()
// #endif
export const useProgramStore = defineStore("program", {
	state: () => ({
		programInfo: data?.miniProgram
	}),
})
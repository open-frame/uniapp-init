import { defineStore } from 'pinia'

export const useSystemStore = defineStore("system", {
	state: () => ({
		systemInfo: uni.getSystemInfoSync(),
	}),
})
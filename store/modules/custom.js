import { defineStore } from 'pinia'

export const useCustomStore = defineStore("custom", {
	state: () => ({
		customInfo: wx.getMenuButtonBoundingClientRect()
	}),
})
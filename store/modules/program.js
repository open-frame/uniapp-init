import { defineStore } from 'pinia'

const data = wx.getAccountInfoSync()
export const useProgramStore = defineStore("program", {
	state: () => ({
		programInfo: data.miniProgram
	}),
})
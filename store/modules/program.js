import { defineStore } from 'pinia'

const data = uni.getAccountInfoSync()
export const useProgramStore = defineStore("program", {
	state: () => ({
		programInfo: data.miniProgram
	}),
})
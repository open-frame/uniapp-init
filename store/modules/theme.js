import { defineStore } from 'pinia'

export const useThemeStore = defineStore("theme", {
	state: () => ({
		themeInfo: ""
	}),
	actions: {
		setTheme(theme) {
			this.theme = themeInfo;
		}
	}
})
import App from './App'
import { createSSRApp } from 'vue'
import { setupStore } from './store/index.js'
import uviewPlus from '@/uni_modules/uview-plus'
import "@/uni_modules/uview-plus/index.scss"


export function createApp() {
  const app = createSSRApp(App)
	app.use(uviewPlus)
	setupStore(app)
  return {
    app
  }
}

import App from './App'
import { createSSRApp } from 'vue'
import { setupStore } from './store/index.js'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
	setupStore(app)
  return {
    app
  }
}

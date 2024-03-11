import { createPinia } from 'pinia'

export function setupStore(app) {
  const pinia = createPinia()
  // pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}


export * from './modules/custom'
export * from './modules/program'
export * from './modules/system'
export * from './modules/theme'
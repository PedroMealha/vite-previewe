import { createApp } from 'vue'
import App from './App.vue'
import store from './store/'
import fs from 'fs'


createApp(App)
	.use(store)
	.use(fs)
	.mount('#app')
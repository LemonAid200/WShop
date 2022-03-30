import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/vuex/store'

// createApp(App).mount('#app')


const app = createApp(App)
app.mount('#app')

store.commit('print')
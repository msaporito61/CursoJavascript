import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createStore())
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"

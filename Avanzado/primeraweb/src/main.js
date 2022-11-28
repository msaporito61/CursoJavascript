import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import store from './store/index'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(store)
app.use(router)


app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"

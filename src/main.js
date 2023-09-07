import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { register } from 'swiper/element/bundle';
register();
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')

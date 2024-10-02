import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vue3GoogleLogin from  'vue3-google-login'
const app = createApp(App)

app.use(router)
// app.use(vue3GoogleLogin,{
//     clientId:"956626380476-dor3lqn8qfnf1ao1lq5uocjj8ldatbef.apps.googleusercontent.com"
// })
app.use(router); 
app.mount('#app')

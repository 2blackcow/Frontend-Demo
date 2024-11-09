import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 설정을 가져옴
import './assets/styles.css'; // 전역 스타일

createApp(App)
    .use(router) // 라우터 사용
    .mount('#app');
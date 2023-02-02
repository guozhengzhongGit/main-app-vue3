
import { createApp } from 'vue';
import 'vant/lib/index.css';
import App from './app.vue';
import { registerRouter } from './router';
const app = createApp(App);


async function setUpApp() {
    await registerRouter(app);
    app.mount('#app');
}

setUpApp();

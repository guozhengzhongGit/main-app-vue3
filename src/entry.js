import { createApp } from 'vue';
import App from './app.vue';
import { registerRouter } from './router';
import { registerElementPlus } from './plugins';
import { setUpStore } from './store';
const app = createApp(App);

async function setUpApp() {
  setUpStore(app);
  registerElementPlus(app);
  await registerRouter(app);
  app.mount('#app');
}

setUpApp();

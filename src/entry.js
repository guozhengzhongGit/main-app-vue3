import { createApp } from 'vue';
import App from './app.vue';
import { registerRouter } from './router';
// import { registerVant } from './plugins';
import { setUpStore } from './store';
// import { setupQiankun } from './qiankun';
const app = createApp(App);

async function setUpApp() {
  setUpStore(app);
  // registerVant(app);
  await registerRouter(app);
  app.mount('#app');
}
// setupQiankun();

setUpApp();

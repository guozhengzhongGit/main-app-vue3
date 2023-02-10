import { registerMicroApps, start } from 'qiankun';

const MICRO_APPS = [
  {
    name: 'vue3-micro',
    entry: '//localhost:6202',
    container: '#vue3',
    activeRule: '/vue3'
  }
];

export function setupQiankun() {
  registerMicroApps(MICRO_APPS);
  start();
}

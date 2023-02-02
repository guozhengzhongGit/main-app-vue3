import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home';
import errRoute from "./error";
import { createRouterGuards } from './router-guards';


const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
    // },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]

routes.push(...errRoute);

const router = createRouter({
    history: createWebHistory(),
    routes
})


export async function registerRouter(app) {
    createRouterGuards(router);
    app.use(router);
    await router.isReady();
}
// export default router

import { ERROR_ROUTE_NAME, PAGE_NOT_FOUND_NAME } from './constants';
import PageNotFound from '@/pages/error/pageNotFound';
const errRoute = [
    {
        path: '/error',
        name: ERROR_ROUTE_NAME,
        redirect: '/error/404',
        children: [
            {
                path: '404',
                name: PAGE_NOT_FOUND_NAME,
                meta: {
                    title: '404',
                },
                component: PageNotFound,
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: PAGE_NOT_FOUND_NAME,
        meta: {
            title: 'NotFound',
        },
        redirect: '/error/404',
        children: [],
    }
]

export default errRoute;

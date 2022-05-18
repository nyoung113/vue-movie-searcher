import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Main from './Main';
import Detail from './Detail';

export default createRouter({
    history : createWebHistory(),
    scrollBehavior : () => ({top : 0}),
    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : '/:keyword',
            component : Main,
        },
        {
            path : '/:keyword/:id',
            component : Detail
        }
    ]
});
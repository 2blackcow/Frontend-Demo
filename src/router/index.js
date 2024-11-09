import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/UserHome.vue';
import MovieDetail from '../views/MovieDetail.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Wishlist from '../views/UserWishlist.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/movie/:id', name: 'MovieDetail', component: MovieDetail },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/wishlist', name: 'Wishlist', component: Wishlist }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
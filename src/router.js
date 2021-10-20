import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './views/Top.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
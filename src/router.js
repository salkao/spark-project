import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Phone from './views/Phone.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/phone/:id',
      name: 'phone',
      component: Phone,
    },
  ],
});

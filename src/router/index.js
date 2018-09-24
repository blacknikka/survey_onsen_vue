import Vue from 'vue';
import Router from 'vue-router';
import TopPage from '@/components/TopPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Top',
      component: TopPage,
    },
  ],
});

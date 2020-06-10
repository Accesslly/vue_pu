import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      name:'Home',
      component: () => import('../views/Home/Home.vue'),
    },
    {
      path:'/message',
      name:'Message',
      component: () => import('../views/Message/Message.vue'),
    },
    {
      path:'/talk',
      name:'Talk',
      component: () => import('../views/Message/Talk.vue'),
    },
    {
      path:'/activity',
      name:'Activity',
      component: () => import('../views/Activity/Activity.vue'),
    },
    {
      path:'/square',
      name:'Suqare',
      component: () => import('../views/Square/Square.vue'),
    },
];

const router = new VueRouter({
  routes
});

export default router

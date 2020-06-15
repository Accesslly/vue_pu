import Vue from 'vue'
import VueRouter from 'vue-router'
import BottomNav from '../views/Home/BottomNav.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/bottomnav',
      name:'BottomNav',
      component: () => import('../views/Home/BottomNav.vue')
    },
    {
      path: '/',
      name: 'Layout',
      meta: {title:'首页底部导航栏'},
      component: BottomNav,
      redirect:'home',
      children:[
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
      path:'/activity',
      name:'Activity',
      component: () => import('../views/Activity/Activity.vue'),
    },
    {
      path:'/square',
      name:'Suqare',
      component: () => import('../views/Square/Square.vue'),
    },
    {
      path:'/my',
      name:'My',
      component: () => import('../views/My/My.vue'),
    },
      ]
    },


    {
      path:'/talk',
      name:'Talk',
      component: () => import('../views/Message/Talk.vue'),
    },
    {
      path:'/set',
      name:'Set',
      component: () => import('../views/My/Set.vue'),
    },
    {
      path:'/person',
      name:'Person',
      component: ()=> import('../views/My/Person.vue'),
    },
    {
      path:'/practice',
      name:'Practice',
      component: () => import('../views/Home/Practice.vue'),
    },
    {
      path:'/city',
      name:'City',
      component: () => import('../views/Home/City.vue'),
    },
    {
      path:'/raiders',
      name:'Raiders',
      component: () => import('../views/Home/Raiders.vue'),
    },
    {
      path:'/search',
      name:'Search',
      component: () => import('../views/Home/Search.vue'),
    },
    {
      path:'/job',
      name:'Job',
      component: () => import('../views/Home/Job.vue'),
    },
    {
      path:'/application',
      name:'Application',
      component: () => import('../views/Home/Application.vue'),
    },
    {
      path:'/credit',
      name:'Credit',
      component: () => import('../views/Home/Credit.vue'),
    },
    {
      path:'/date',
      name:'Date',
      component: () => import('../views/Home/Date.vue'),
    },
    {
      path:'/tribe',
      name:'Tribe',
      component: () => import('../views/Home/Tribe.vue'),
    },
    {
      path:'/survey',
      name:'Survey',
      component: () => import('../views/Home/Survey.vue'),
    },
    {
      path:'/test',
      name:'Test',
      component: () => import('../views/Home/Test.vue'),
    },
];

const router = new VueRouter({
  routes
});

export default router

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import platform from '@/components/page/Platform'
import register from '@/components/page/register'
import distriMap from '@/components/common/distributionMap'
import nav from '@/components/common/nav'
import initialPage from '@/components/page/initialPage'
import home from '@/components/page/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'platform',
      component: initialPage
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/distriMap',
      component: distriMap
    },{
      path:'/nav',
      component:nav
    },{
      path:'/home',
      name:'home',
      component:home
    }
  ]
})

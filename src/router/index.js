import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import platform from '@/components/page/Platform'
import register from '@/components/page/register'
import register2 from '@/components/page/register2'
import distriMap from '@/components/common/distributionMap'
import chinaMap from '@/components/page/chinaMap'
import beifenMap from '@/components/page/beifen'
import csharp from '@/components/page/csharp'
import grade from '@/components/page/grade'
import nav from '@/components/common/nav'
import home from '@/components/page/initialPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'platform',
      component: home
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/register2',
      name: 'register2',
      component: register2
    },{
      path: '/distriMap',
      component: distriMap
    },{
      path:'/chinamap',
      component: chinaMap
    },{
      path:'/beifen',
      component: beifenMap
    },{
      path:'/grade',
      component:grade
    },{
      path:'/nav',
      component:nav
    }
  ]
})

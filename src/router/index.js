import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import platform from '@/components/page/Platform'
import register from '@/components/page/register'
import register2 from '@/components/page/register2'
import distriMap from '@/components/page/distributionMap'
import chinaMap from '@/components/page/chinaMap'
import beifenMap from '@/components/page/beifen'
import give from '@/components/page/give'
import need from '@/components/page/need'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path:'/give',
      component:give
    },{
      path:'/need',
      component:need
    }
  ]
})

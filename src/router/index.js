import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import platform from '@/components/page/Platform'
import register from '@/components/page/register'
import distriMap from '@/components/common/distributionMap'
import nav from '@/components/common/nav'
import initialPage from '@/components/page/initialPage'
import home from '@/components/page/home'
import give from '@/components/page/give'
import need from '@/components/page/need'
import message from '@/components/page/message'
import myPage from '@/components/page/myPage'
import search from '@/components/page/search'
import supplyAndDemand from '@/components/page/mySupplyDemand'
import detail from '@/components/page/detail'

Vue.use(Router)

const router = new Router({
  
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
      component:home,
      meta:{
        requireAuth:true
      }
    },{
      path:'/give',
      name:'give',
      component:give,
      meta:{
        requireAuth:true
      }
    },{
      path:'/need',
      name:'need',
      component:need,
      meta:{
        requireAuth:true
      }
      //17：53 更新
    },{
      path:'/myPage',
      name:'myPage',
      component:myPage,
      meta:{
        requireAuth:true
      }
    },{
      path:'/message',
      name:'message',
      component:message
    },{
      path:'/search',
      name:'search',
      component:search
    },{
      path:'/myPage/supplyAndDemand',
      component:supplyAndDemand
    },{
      path:'/detail',
      component:detail
    }
  ]
})

router.beforeEach((to,from,next) => { 
  if(to.path==="/" || to.path==="/register")
    return next()

  //获取token
  else  {
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
      return next("/")
    }
    next()
  }
})

export default router
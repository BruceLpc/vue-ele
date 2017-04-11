import Vue from 'vue'
import Router from 'vue-router'
import comment from '@/components/comment/comment'
import goods from '@/components/goods/goods'
import header from '@/components/header/header'
import shops from '@/components/shops/shops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/shops',
      name: 'shops',
      component: shops
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Uk from '@/components/Uk'
import Cart from '@/components/cart1/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/en/v2',
      name: 'Uk',
      component: Uk
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
import Seller from '../components/seller'
import Goods from '../components/goods'
import Ratings from '../components/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    { // 默认路由
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }
  ],
  linkActiveClass: 'active'
})

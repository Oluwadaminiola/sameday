import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/layout.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'production',
          components: {
            default: () => import('../views/productionhouse'), 
            Topnav: () => import('../components/topnav'),
            Footer: () => import('../components/footer')
          }
        }, 
        {
          path: 'order',
          name: 'order',
          components: {
            default: () => import('../views/order'), 
            Topnav: () => import('../components/topnav'),
            Footer: () => import('../components/footer')
          }
        }
      ]
    }
  ]
})
 

// const router = new VueRouter({
//   routes
// })

export default router

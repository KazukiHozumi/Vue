import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: ProductList
    },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: Number(route.params.id) })
    }
  ]
})

export default router

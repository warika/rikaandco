import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/product/Product.vue'
import VProduct from './components/product/VProduct.vue'
import VFilter from './components/product/filter/VFilter.vue'
import VNewin from './components/product/VNewin.vue'
import VSale from './components/product/VSale.vue'

// import VProductDetail from './components/product/VProductDetail.vue'
import ProductDetail from './views/product/ProductDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      children:[
        {
          path: 'newin',
          components: {default: VNewin, filter : VFilter }
        },
        {
          path: 'sale',
          components: {default: VNewin, filter : VFilter }
        },
        {
          path: ':type',
            components: {default: VProduct, filter : VFilter }
        }
        // ,
        // {
        //   path: 'detail/:id',
        //   component: VProductDetail
        // }
      ]
    },
    {
      path: '/product/detail/:id',
      name: 'detail',
      component: ProductDetail
    },

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import City from '../pages/City/City'
import Detail from '../pages/Detail/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

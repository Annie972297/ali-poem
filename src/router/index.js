import Vue from 'vue'
import Router from 'vue-router'
import PoemApp from '@/components/PoemApp'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/PoemApp',
      name:'PoemApp',
      component:PoemApp
    }
  ]
})

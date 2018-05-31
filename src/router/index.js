import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }
  ]
})

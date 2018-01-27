import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import Photography from '@/components/Photography'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/photos',
      name: 'Photography',
      component: Photography
    },
  ]
})

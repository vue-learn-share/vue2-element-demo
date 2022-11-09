import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueJsonViewer from '@/components/VueJsonViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'VueJsonViewer',
      component: VueJsonViewer
    }
  ]
})

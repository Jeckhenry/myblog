import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import  fileDir from '@/pages/fileDir.vue'
import  labelpage from '@/pages/labelpage'
import  about from '@/pages/about'
import  lookup from '@/pages/lookup'
import  blog from '@/pages/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/fileDir',
      name: 'fileDir',
      component: fileDir
    },{
      path: '/labelpage',
      name: 'labelpage',
      component: labelpage
    },{
      path: '/about',
      name: 'about',
      component: about
    },{
      path: '/lookup',
      name: 'lookup',
      component: lookup
    },{
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})

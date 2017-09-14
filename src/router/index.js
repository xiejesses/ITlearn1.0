import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Group from '@/components/Group'
import Project from '@/components/Project'
import Share from '@/components/Share'
import Notifications from '@/components/Notifications'
import User from '@/components/User'

// import Vindex from '@/components/Vindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/group',
      name: 'Group',
      component: Group
    },
    {
      path:'/project',
      name: 'Project',
      component: Project
    },
    {
      path:'/share',
      name: 'Share',
      component: Share
    },
    {
      path:'/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path:'/user',
      name: 'User',
      component: User
    }


  ]
})

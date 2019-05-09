import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import WorkHistory from '../pages/WorkHistory'
import Skills from '../pages/Skills'
import Code from '../pages/Code'
import Education from '../pages/Education'
import Projects from '../pages/Projects'
import CV from '../pages/CV'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/work-history',
      name: 'WorkHistory',
      component: WorkHistory
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    }
  ]
})

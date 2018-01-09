import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import WorkHistory from '../components/WorkHistory'
import Skills from '../components/Skills'
import Code from '../components/Code'
import Education from '../components/Education'
import Projects from '../components/Projects'
import CV from '../components/CV'

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

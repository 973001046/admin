import UserControl from '@/views/UserControl'
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    component: Layout,
    menu: false,
    children: [
      {
        path: '/user/control',
        component: UserControl
      }
    ]
  }
]

export default routes

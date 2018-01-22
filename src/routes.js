import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
// const Menu = () => import(/* webpackChunkName:"footer-group" */ './components/Menu.vue')
// const  About =() =>import(/* webpackChunkName:"footer-group" */ './components/About.vue')
import About from './components/About.vue'
import History from './components/History.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'
// const Admin =() =>import(/* webpackChunkName:"footer-group" */ './components/Admin.vue')

export const  routes = [
  {
    path: '/',
    name: 'homeLink',
    components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      delivery: Delivery,
      history: History
    }
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    beforeEnter(to, from, next) {
      alert('admin')
      next()
    }
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      { path: '/contact', name: 'contactLink', component: Contact },
      { path: '/history', name: 'historyLink', component: History },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      {
        path: '/ordering-guide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      }
    ]
  },
  { path: '*', redirect: '/' }
]

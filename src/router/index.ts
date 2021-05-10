import Vue from 'vue';
import Router from 'vue-router';

/* layout */
import Layout from '../views/layout/layout.vue';
import Home from '../views/dhome/home.vue';

/* login */
import Login from '../views/login/login.vue';

/* dashboard */
import dashboard from '../views/dashboard/dashboard.vue';

/* error page */
import Err404 from '../views/error/404.vue';

/* demo page */
import Form from '../views/page/form.vue';
import Table from '../views/table/table.vue';

/* demo props */
import Props from '../views/interaction/props.vue';

Vue.use(Router);


/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 */
export const constantRouterMap = [
  { path: '/login', name: 'login', component: Login, hidden: true },
  { path: '/404', name: '404', component: Err404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }]
  },
  {
    path: '/home',
    component: Layout,
    redirect: 'noredirect',
    name: 'Form',
    icon: 'el-icon-menu',
    children: [{ path: 'index', component: Form, name: 'Form1', icon: 'el-icon-date' }]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: 'TableMain',
    icon: 'el-icon-tickets',
    noDropdown: true,
    children: [{ path: 'index', component: Table, name: 'Table', meta: { role: ['admin'] } }]
  },
  {
    path: '/dInit',
    component: Layout,
    redirect: 'noredirect',
    name: 'DInit',
    icon: 'el-icon-location',
    children: [
      {
        path: 'dhome',
        name: 'dhome',
        component: Home
      },
      {
        path: 'dabout',
        name: 'dabout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/dabout/about.vue')
      },
      {
        path: 'electronView',
        name: 'electronView',
        component: () => import(/* webpackChunkName: "electronView" */ '../views/electron/electron-view.vue')
      }
    ]
  },
  {
    path: '/interaction',
    component: Layout,
    redirect: 'noredirect',
    name: 'interaction',
    icon: 'el-icon-goods',
    children: [
      {
        path: 'porps',
        name: 'porps',
        component: Props
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});



import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index.vue'

Vue.use(Router)

export let constRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    name: 'layout',
    hidden: true,
    redirect: '/home/room',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/layout/index.vue')
  }
]

export const asyncRoutes = [
  {
    path: '/home',
    name: 'home',
    redirect: '/home/room',
    component: layout,
    children: [
      {
        path: 'room',
        name: 'room',
        component: () => import('@/views/Home'),
        meta: {
          title: '首页'
        }
      }
    ],
    meta: {
      title: '首页'
      // role: 'home'
    }
  },
  {
    path: '/system',
    name: 'system',
    redirect: '/system/user-role',
    component: layout,
    children: [
      {
        path: 'user-role',
        name: 'user-role',
        component: () => import('@/views/System/UserRole'),
        meta: {
          title: '用户权限'
        }
      },
      {
        path: 'menu-role',
        name: 'menu-role',
        component: () => import('@/views/System/MenuRole'),
        meta: {
          title: '菜单权限',
          role: 'menu'
        }
      },
      {
        path: 'shop-role',
        name: 'shop-role',
        component: () => import('@/views/System/ShopRole'),
        meta: {
          title: '商品权限',
          role: 'shop'
        }
      }
    ],
    meta: {
      title: '系统设置',
      role: 'system'
    }
  },
  {
    path: '/manager',
    name: 'manager',
    redirect: '/manager/user',
    component: layout,
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/Manager/User'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'car',
        name: 'car',
        component: () => import('@/views/Manager/Car'),
        meta: {
          title: '车辆管理',
          role: 'car'
        }
      }
    ],
    meta: {
      title: '管理设置',
      role: 'manager'
    }
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
  router.options.routes = []
}

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import { verifyToken, refreshToken } from '../api/auth'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
  // 后续可加更多页面
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('access_token')
  console.log(token)
  if (!token && to.meta.requiresAuth) {
    return next({ name: 'Login' })
  }

  if (token) {
    try {
      const result = await verifyToken();
      const status = result.status;
      if (status === 1002) {
        const res = await refreshToken();
        const new_token = res.access_token;
        localStorage.setItem('access_token', new_token);
        return next({ name: 'Home' })
      } else if (status === 0) {
        // 已登录
        if (to.name === 'Login') {
          // 已登录访问登录页，跳首页
          return next({ name: 'Home' })
        } else {
          return next()
        }
      } else {
        // 其他异常，统一跳登录页
        if (to.name !== 'Login') {
          return next({ name: 'Login' })
        } else {
          return next()
        }
      }
    } catch (e) {
      if (to.name !== 'Login') {
        return next({ name: 'Login' })
      } else {
        return next()
      }
    }
  } else {
    return next({ name: 'Login' })
  }
})



export default router


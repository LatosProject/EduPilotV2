import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SettingsPage from '../pages/SettingsPage.vue'
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
  },
  {
    path: '/assignment/:id',
    name: 'AssignmentDetail',
    component: HomePage
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage
  }
  // 后续可加更多页面
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

async function isTokenValid() {
  try {
    const result = await verifyToken()
    return result.status
  } catch {
    return null
  }
}

async function tryRefreshToken() {
  try {
    const res = await refreshToken()
    localStorage.setItem('access_token', res.access_token)
    return true
  } catch {
    return false
  }
}

function redirectToLoginOrNext(to, next) {
  if (to.name !== 'Login') {
    return next({ name: 'Login' })
  }
  return next()
}

function redirectToHomeOrNext(to, next) {
  if (to.name === 'Login') {
    return next({ name: 'Home' })
  }
  return next()
}

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (!token && to.meta.requiresAuth) {
    return redirectToLoginOrNext(to, next)
  }

  if (token) {
    const status = await isTokenValid()

    switch (status) {
      case 1002: // token过期，尝试刷新
        const refreshed = await tryRefreshToken()
        if (refreshed) {
          // 刷新成功，跳转首页
          return next({ name: 'Home' })
        }
        // 刷新失败，去登录
        return redirectToLoginOrNext(to, next)
      case 0: // token有效
        return redirectToHomeOrNext(to, next)
      default: // 其他状态异常
        return redirectToLoginOrNext(to, next)
    }
  }

  // 无token且不需要鉴权的路由
  return next()
})

export default router

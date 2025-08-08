// api/auth.js
import request from './index'  // 确认这个是你 axios 实例

// 登录接口
export function login(username, password) {
  return request.post('/api/v1/auth/login', { username, password })
}

// 获取用户信息
export function getProfile() {
  return request.get('/api/v1/auth/profile')
}

// 刷新token
export async function refreshToken() {
  const response = await request.post('/api/v1/auth/refresh', {}, { withCredentials: true })
  const { access_token, expires_in } = response.data.data
  return { access_token, expires_in }
}

export async function verifyToken() {
  try {
    const response = await request.get('/api/v1/auth/verify_token');

    return {
      status: response.data.status,
      message: response.data.message
    };
  } catch (error) {
    const backendResponse = error.response;

    if (backendResponse && backendResponse.data) {
      // backendResponse.data 里面就是你想要的 status 和 message
      return {
        status: backendResponse.data.status,
        message: backendResponse.data.message
      };
    }

    // 如果没有后端响应数据（比如网络错误），返回一个默认的失败状态。
    return {
      status: -1,
      message: '网络或服务器错误'
    };
  }
}
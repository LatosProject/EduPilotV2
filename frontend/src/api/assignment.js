// src/apis/index.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000', // 后端地址
  timeout: 5000,
})

export async function getAssignments(classUuid, page = 1, size = 10, order_by = 'created_at', order = 'asc') {
  try {
    const token = localStorage.getItem('access_token')
    if (token) {
      instance.defaults.headers.Authorization = `Bearer ${token}`
      console.log('Adding Authorization header:', token)
    }

    const url = `/api/v1/classes/${classUuid}/homeworks`
    const res = await instance.get(url, {
      params: { page, size, order_by, order }
    })

    // 这里要注意 res.data.data 结构
    return {
      items: res.data.data.items,
      pagination: res.data.data.pagination,
    }
  } catch (error) {
    console.error('获取作业列表失败', error)
    throw error
  }
}

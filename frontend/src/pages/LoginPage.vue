<template>
    <div>
        <h2>登录</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label>用户名</label>
                <input v-model="username" type="text" />
            </div>
            <div>
                <label>密码</label>
                <input v-model="password" type="password" />
            </div>
            <div v-if="error">{{ error }}</div>
            <button type="submit">登录</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
    error.value = ''
    if (!username.value || !password.value) {
        error.value = 'username and password are required'
        return
    }
    try {
        const res = await axios.post('/api/v1/auth/login', {
            username: username.value,
            password: password.value

        })
        const token = res.data?.data?.access_token
        if (token) {
            localStorage.setItem('access_token', token)
            console.log('Login successful, token:', token)
            // router.push('/')
        } 
        else {
            error.value = 'Lgoin failed, please try again'
        }
    } catch (err) {
        if (err.response && err.response.data) {
            error.value = err.response.data.message || 'Login failed, please try again'
        }
    }
}
</script>
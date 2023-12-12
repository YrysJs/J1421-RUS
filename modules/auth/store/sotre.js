import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from '../../../utils/axios'
import axios from "axios";
import { setCookie } from "../../../utils/cookie";

export const useAuthStore = defineStore('auth', () => {
    //states
    const user = ref(false)
    const userId = ref(null)

    //actions
    const fetchUserInfo = async(userData) => {
        const { data } = await axios.post('https://web-production-51b6.up.railway.app/api/login/', userData)
        data.tokens.access ? user.value = true : user.value = false
        data.id ? userId.value = data.id : userId.value = null 

        setCookie('user_id', data.id)
        setCookie('access_token', data.tokens.access, {expires: 3})
        setCookie('refresh_token', data.tokens.refresh, {expires: 3})
    }
    const createUser = async(data) => {
        const response = await axios.post('https://web-production-51b6.up.railway.app/api/register/', data)
    }
    const logout = () => {
        user.value = false
        removeCookie('access_token')
        removeCookie('refresh_token')
        removeCookie('user_id')

        window.location.href = '/'
    }


    return { user, fetchUserInfo, createUser, logout, userId }
})
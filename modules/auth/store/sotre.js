import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from '../../../utils/axios'

export const useAuthStore = defineStore('auth', () => {
    const user = ref()

    //actions
    const fetchUserInfo = async(data) => {
        const response = await axios.post('/login/', data)

        user.value = response.data
    }


    //getters
    const getUserInfo = computed(() => {
        return user.value
    })

    return { user, fetchUserInfo, getUserInfo }
})
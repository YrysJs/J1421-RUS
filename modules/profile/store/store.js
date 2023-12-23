import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from '../../../utils/axios'

export const useProfileStore = defineStore('profileStore', () => {
    //state
    const profile = ref({})

    //actions
    const fetchUserProfile = async () => {
        const res = await api.get('/profile/')
        profile.value = res.data
    }
    const uploadProfileAvatar = async (formData) => {
        const res = await api.put('/profile/avatar/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    //getters
    const getProfile = computed( () => {
        return profile.value;
    })

    return { profile, fetchUserProfile, getProfile, uploadProfileAvatar}
})
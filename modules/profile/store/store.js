import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from '../../../utils/axios'

export const useProfileStore = defineStore('profileStore', () => {
    //state
    const profile = ref({})

    //actions
    const fetchUserProfile = async () => {
        const res = await api.get('/post/?author=1')
        profile.value = res
    }

    //getters
    const getProfile = computed( () => {
        return profile.value;
    })

    return { profile, fetchUserProfile, getProfile}
})
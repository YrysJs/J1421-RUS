import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import api from '../../../utils/axios'
import { getCookie } from "../../../utils/cookie";

export const useMyReviewStore = defineStore('my-review-store', () => {
    //states
    const posts = ref([])

    //actions
    const fetchMyReview = async () => {
        const { data } = await api.get(`/post/?author=${getCookie('user_id')}`)
        posts.value = data.data
    }

    //getters
    const getMyReview = computed( () => {
        return posts.value
    })

    return { posts, getMyReview, fetchMyReview }
})
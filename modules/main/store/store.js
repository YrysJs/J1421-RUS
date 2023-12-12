import { defineStore } from "pinia";
import { ref, computed } from "vue"
import axios from "axios";

export const useMainStore = defineStore('mainStore', () => {
    //states
    const reviews = ref([])

    //actions
    const fetchReviews = async () => {
        const { data } = await axios.get('https://web-production-51b6.up.railway.app/api/post/')

        reviews.value = data
    }

    //getters
    const getReviews = computed( () => {
        return reviews.value
    })

    return { reviews, fetchReviews, getReviews }
})
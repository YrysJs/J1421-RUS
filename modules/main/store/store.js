import { defineStore } from "pinia";
import { ref, computed } from "vue"
import axios from "axios";

export const useMainStore = defineStore('mainStore', () => {
    //states
    const reviews = ref([])
    const searchResults = ref([])

    //actions
    const fetchReviews = async (query) => {
        const { data } = await axios.get('https://web-production-51b6.up.railway.app/api/post/', {
            params: query 
        })

        reviews.value = data
    }
    const fetchSearchResults = async (query) => {
        const { data } = await axios.get('https://web-production-51b6.up.railway.app/api/post/', {
            params: query
        })

        searchResults.value = data
        reviews.value = data
    }
    const addLike = async () => {

    }

    //getters
    const getReviews = computed( () => {
        return reviews.value
    })
    const getSearchResults = computed( () =>{
        return searchResults.value
    })

    return { reviews, fetchReviews, getReviews, fetchSearchResults, searchResults, getSearchResults }
})
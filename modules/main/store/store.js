import { defineStore } from "pinia";
import { ref, computed } from "vue"
import axios from "axios";
import api from '../../../utils/axios'

export const useMainStore = defineStore('mainStore', () => {
    //states
    const reviews = ref([])
    const searchResults = ref([])
    const locationList = ref([])
    const positionList = ref([])
    const activityList = ref({})
    const postComments = ref([])

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
    const addLike = async (id) => {
        const response = api.post(`post/like/${id}/`)
    }
    const addComment = async (id, obj) => {
        const response = api.post(`post/${id}/comment/`, obj)
    }
    const fetchFields = async () => {
        const location = await api.get('/location/');
        locationList.value = location.data;

        const activity = await api.get('/activity/')
        activityList.value = activity.data

        const position = await api.get('/position/');
        positionList.value = position.data
    }
    const fetchPostCommentsById = async (id) => {
        const { data } = await api.get(`/post/${id}/comment/`)
        postComments.value = data    
    }


    //getters
    const getReviews = computed( () => {
        return reviews.value
    })
    const getSearchResults = computed( () =>{
        return searchResults.value
    })
    const getLocations = computed( () => {
        return locationList.value
    })
    const getPositions = computed( () => {
        return positionList.value
    })
    const getActivity = computed( () => {
        return activityList.value
    })
    const getPostComments = computed( () => {
        return postComments.value
    })

    return { reviews, fetchReviews, getReviews, fetchSearchResults, searchResults, getSearchResults, activityList, locationList, positionList, fetchFields, getLocations, getPositions, getActivity, addLike, addComment, postComments, getPostComments, fetchPostCommentsById}
})
import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import api from '../../../utils/axios'

export const useAddReviewStore = defineStore('add-review', () => {
    //states
    const singleReview = ref({})

    //actions
    const addRatingForReviewById = async (id, obj) => {
        const response = await api.put(`/post/${id}`)
    } 
    const addReview = async (reviewObj, ratingObj) => {
        const { data } = await api.post('/post/', reviewObj)

        const rating = {
            ...ratingObj,
            post: data.id
        }

        const response = await api.post(`/post/${data.id}/rating/`, rating)
    }
    const fetchReviewById = async (id) => {
        const { data } = await api.get(`/post/${id}/`)

        singleReview.value = data
    }

    const updateReviewById = async (id, obj) => {
        const response = await api.put(`/post/${id}`, obj)
    }

    //getters
    const getReviewById = computed( () => {
        return singleReview.value
    })

    return { addReview, singleReview , getReviewById, fetchReviewById, updateReviewById, addRatingForReviewById }
})
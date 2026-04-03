import { defineStore } from 'pinia'
import { getLayout } from '@/api/Layout'
import { ref } from 'vue'

export const useCategoryStore = defineStore('layout', () => {
  const categorylist = ref([])
  const getLayoutapi = async () => {
    const res = await getLayout()
    categorylist.value = res.data.result
  }
  return {
    getLayoutapi,
    categorylist,
  }
})

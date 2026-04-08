<template>
  <div>
    <label>
      <input type="checkbox" v-model="checkAll"> 全选
    </label>

    <div v-for="item in list" :key="item.id">
      <label>
        <input
          type="checkbox"
          v-model="checkedIds"
          :value="item.id"
        >
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const list = ref([
  { id: 1, name: '苹果' },
  { id: 2, name: '香蕉' },
  { id: 3, name: '橙子' }
])

const checkedIds = ref([])

// 全选
const checkAll = computed({
  get() {
    return checkedIds.value.length === list.value.length
  },
  set(val) {
    if (val) {
      checkedIds.value = list.value.map(item => item.id)
    } else {
      checkedIds.value = []
    }
  }
})
</script>

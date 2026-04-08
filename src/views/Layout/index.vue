<template>
  <LayoutFixed></LayoutFixed>
  <LayoutHeader></LayoutHeader>
  <LayoutHeaderUI></LayoutHeaderUI>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
  <CheckOut></CheckOut>

</template>

<script setup>
import CheckOut from '@/components/CheckOut.vue';
import { useRoute } from 'vue-router';
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderUI from './components/LayoutHeaderUI.vue';
const route = useRoute()
</script>

<style lang="scss" scoped>
</style>

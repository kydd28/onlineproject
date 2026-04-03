<template>
  <LayoutFixed></LayoutFixed>
  <LayoutHeader></LayoutHeader>
  <LayoutHeaderUI></LayoutHeaderUI>
  <RouterView></RouterView>
  <div class="vox"></div>
  <LayoutFooter></LayoutFooter>

</template>

<script setup>
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderUI from './components/LayoutHeaderUI.vue';
</script>

<style lang="scss" scoped>
.vox{
  height: 1999px  ;
}
</style>

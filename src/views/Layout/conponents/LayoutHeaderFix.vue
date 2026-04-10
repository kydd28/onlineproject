<script setup>
import { useScroll } from '@vueuse/core';
const {y}=useScroll(window)
</script>


<template>
 <div class="nav" :class="{show:y>300}">
  <div class="nav-header">
    <div class="nav-context">
      <ul class="nav-ul">
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
      </ul>
    </div>
  </div>
 </div>
</template>
<style lang="scss" scoped>
.nav{
  position: fixed;
  top: 0; 
  left: 0;
  width: 100vw;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2bfbf;
  transform: translateY(-100%);
  z-index: 999;
  opacity: 0;
  &.show{
    opacity: 1;
    transform: none;
    transition: all 0.3s;
  }
}
.nav-header{
  width: 60%;
  // background-color: aliceblue;
}
.nav-ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
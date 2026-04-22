<script setup>
import {getcommondapi  } from '@/api/home';
import { ref ,onMounted } from 'vue';
import HomePanel from './HomePanel.vue';
const productlist=ref([])
const getproductlist = async()=>{
 const res = await getcommondapi()
 productlist.value = res.data.result


}
onMounted(()=>{
getproductlist()
})
</script>

<template>
  <HomePanel title="人气推荐" subtitle="不买你也给我飞起来">
    <ul class="goods-list">
      <li v-for="item in productlist.slice(0,4)" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }} 我是你的爹</p>
          <p class="price">&yen;{{ item.id}} 我是你的神</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>


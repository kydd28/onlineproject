<script setup>
import { gethotapi } from '@/api/home';
import { ref ,onMounted } from 'vue';
import HomePanel from './HomePanel.vue';
const hotlist=ref([])
const gethot=async () =>{
  const res = await gethotapi()
  hotlist.value= res.data.result


}
onMounted(()=>{
  gethot()
})
</script>

<template>
  <HomePanel title="热门商品" subtitle="不买你就给我飞起来">
    <ul class="goods-list">
      <li v-for="item in hotlist.slice(0,4)" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.id }}</p>
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

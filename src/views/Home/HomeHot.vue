<script setup>
import { gethotgoodsapi } from '@/api/home';
import { ref,onMounted } from 'vue';
const hotgoodslist=ref([])
const gethotgoods= async()=>{
  const res = await gethotgoodsapi()
  console.log(res);
  
  hotgoodslist.value=res.data.result.slice(0,4)
}
onMounted(()=>{
  gethotgoods()
})
</script>

<template>
<div class="shopcard">

      <div class="shop-item" v-for="item in hotgoodslist">
          <div class="shop-img">
              <img :src="item.picture" alt="">
          </div>
          <div class="shop-title">
            {{item.desc}}
          </div>
          <div class="shop-context">

          </div>
    </div>
</div>
</template>

<style  scoped>
.shopcard{
  /* background-color: rgb(1, 11, 11); */
  width: 1200px;
  height: 300px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.shop-item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 300px;
  max-width: 300px;
  }
  .shop-item .shop-img{
    width: 300px;
    height: 300px;
  }
  .shop-item img{
    width: 100%;
    height: 100%;
  }
</style>
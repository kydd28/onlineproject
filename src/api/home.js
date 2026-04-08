import request from '@/utils/http'
// 获取banner轮播图素材
export const getbannerapi = (params = {}) => {
  const { distributionSite } = params
  return request({
    url: '/home/banner',
    params: {
      distributionSite,
    },
  })
}
// 获取新鲜好物素材
export const getnewapi = () => {
  return request({
    url: '/home/new',
  })
}
// 获取热门产品素材
export const gethotapi = () => {
  return request({
    url: '/home/brand',
  })
}
// 获取人气推荐素材
export const getcommondapi = () => {
  return request({
    url: '/home/hot',
  })
}

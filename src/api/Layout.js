import request from '@/utils/http'
export const getLayout = () => {
  return request({
    url: '/home/category/head',
    method:"GET"
  })
}

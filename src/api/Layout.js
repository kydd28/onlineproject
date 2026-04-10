import request from "@/utils/request";
export const getbannerapi=()=>{
  return request({
    url:"/banner/list",
    method:'GET'
  })
}
import request  from "@/utils/http";
export const getcategoryapi=(id)=>{
  return request({
    url:"/category",
    params:{
      id
    }
  })
}

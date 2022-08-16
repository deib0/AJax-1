axiosGET.onclick=()=>{
    const style = document.createElement('style')
  let xxx = axios.get('http://localhost:8888/style.css')
  xxx.then((result)=>{console.log(result.data);style.innerHTML = result.data})
  document.head.appendChild(style)
//   console.log(xxx.request.response)
}

axiosPOST.onclick=()=>{
  let yyy = axios.post('http://localhost:8888/axiosPOST',{
    username:'deibo',
    password:'123456'
  },{
    // url
    // 查询参数
    params:{
        params:'params'
    },
    // 请求头
    headers:{
        headers:'headers'
    }
  })
  yyy.then((result)=>{console.log(result.data)})
}

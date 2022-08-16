## ajax 是什么？
* asynchronism javascript and xml 异步脚本和XML,能够实现无刷新的获取数据和懒加载功能。

* xml，超文本标记语言，被设计用来传输数据和储存数据，全部都是自定义的标签。但是已经被淘汰，而是使用更加简洁的json。

## ajax 优缺点
* ajax的优点：1.无刷新获取数据2.允许和配合事件展示

* ajax的缺点：1.没有浏览历史，不能回退2.存在跨域问题3.SEO不友好

## 认识http

http【超文本传输协议】，规定了请求报文的格式:请求行、请求头、请求体，规定了响应报文的格式:相应行、响应头、响应体，使用浏览器查看请求报文和响应报文的各部分。

## 实战
1. 搭建一个服务器

2. 写ajax发请求
* readystate是xhr对象的属性

* 发查询参数 '/index.html?username=deibo&userid=01'，

* 发POST，请求体放到 xhr.send(请求体)

* 设置请求头信息 xhr.setRequestHeader('ContentType','')

* IE缓存，给路径的查询参数加时间戳，解决IE从缓存中读取内容的问题

* AJax超时处理：xhr.timeout=设置超时时间；xhr.ontimeout=()=>{alert('请求超时了')}；xhr.onerror=()=>{alert('请求失败，请检查网络')}

* 取消请求： x.abort()

* 重复发送请求的情况，通过变量（isSending）判断是否正在发送 

* 使用axios发GET和POST： axios.get(url,config) axios.post(url,data,config)

* 使用axios函数发

* 使用fetch函数发请求

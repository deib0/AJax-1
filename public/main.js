let n = 2
nextPage.addEventListener('click', () => {//  请求下一页
    const request = new XMLHttpRequest()
    console.log(n);
    request.open('GET', `/page${n}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const arr = JSON.parse(request.response)
            arr.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                page.appendChild(li)
            });
            n = n + 1
        }
    }
    request.send()
})

getJSON.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    console.log(request.readyState);//  这里可以打印出请求状态码1,即创建
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status < 300 && request.status >= 200) {
            let obj
            try {
                obj = JSON.parse(request.response)
            } catch (error) {//  如果字符串不符合JS语法,就在这里报错并给obj一个保底值
                console.log('出错了,错误详细是')
                console.log(error);
                obj = { 'name': 'user' }//  保底值
            }
            console.log(obj);
        }
    }
    request.send()
})
getXml.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status < 300) {
                const dom = request.responseXML//  注意responseXML的方法与其他的不一样
                const text = dom.getElementsByTagName('warning')[0].textContent// XML支持DOM
                console.log(text);
            }
        }
    }
    request.send()
})

getCss.addEventListener('click', () => {
    const request = new XMLHttpRequest()//构造请求
    request.open("GET", "/style.css")//  该路径是http的路径
    request.onload = () => {//  请求成功,则
        const style = document.createElement('style')
        style.innerHTML = request.response//  添加获取请求内容
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()//  发送请求
})

getJs.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log('加载2.js成功');
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('2.js失败了');
    }
    request.send()
})

getHtml.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {//  请求状态改变事件
        if (request.readyState === 4) {//  请求状态等于4再执行
            if (request.status < 300) {//  判断回应的状态码
                const newDiv = document.createElement('div')
                newDiv.innerHTML = request.response
                document.body.appendChild(newDiv)
            } else {
                console.log('html加载失败')
            }

        }
    }
    request.send()
})
// 手写ajax

//readyState
// 0 － （未初始化）还没有调用open()方法
// 1 － （载入）已调用open()方法，正在发送请求
// 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
// 3 － （交互）正在解析响应内容
// 4 － （完成）响应内容解析完成，可以在客户端调用了

// status
// 200（成功） 
// 301（永久重定向）
// 302（临时重定向）
// 304（未修改）
// 403（禁止） 服务器拒绝请求。
// 404（未找到）
// 5xx 服务器错误


/**
 * 
 * @param {
 * url: 请求地址,必选
 * method: 请求方法，get/post，必选
 * data: 请求数据，可选
 * async: 同步或者异步，布尔值，可选
 * success: 请求成功的回调函数
 * failed: 请求失败的回调函数
 * }  
 * 
 */
function ajax({ url,
    method,
    data = null,
    async = true,
    success,
    failed,
    error
}) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //成功
            success(xhr.response)
        } else if (xhr.status >= 400) {
            failed(xhr)
        }
    }

    xhr.onerror = (err) => {
        error(err)
    }

    xhr.open(method, url, async);
    xhr.send(data);
}

// 调用函数
ajax({
    url: "/ajaxData",
    method: "get",
    success: (res) => {
        console.log(res)
    },
    failed: (res) => {
        console.log(res)
    },
    error: (err) => {
        console.log(err)
    }
})
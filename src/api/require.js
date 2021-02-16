import axios from "axios";
import qs from "qs";
import { TOKEN } from "../util/constMap";

let http = axios.create({
    baseURL: "https://bweb.51jiachi.com/", // api 的 base_url
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    // 请求超时时间（毫秒）
    timeout: 50000
});

// 请求拦截器
http.interceptors.request.use(
    function (config) {
        config.headers.tk = localStorage.getItem(TOKEN);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
// 响应拦截器
http.interceptors.response.use(
    response => {

        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
//请求对象
let ApiData = {
    post (arg) {
        if (!arg.method) {
            arg.method = "POST";
        }
        let sendConfig = Object.assign(
            {
                token: true
            },
            arg
        );
        if (sendConfig.qs && sendConfig.qs === true)
            // 格式化表单数据
            sendConfig.data = qs.stringify(sendConfig.data, { allowDots: true });
        return new Promise((resolve, reject) => {
            http(sendConfig)
                .then(e => {
                    resolve(e);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
    put (arg) {
        arg.method = "PUT";
        return this.post.call(this, arg);
    },
    delete (arg) {
        arg.method = "DELETE";
        return this.post.call(this, arg);
    },
    get (arg) {
        if (arg.data) {
            arg.params = arg.data;
            arg.data = true; // 设置data为ture 可以为get添加请求头
        }
        arg.method = "GET";
        return this.post.call(this, arg);
    },
    baseUrl () {
        return process.env.VUE_APP_BASE_API;
    }
};
export default {
    ...ApiData
};

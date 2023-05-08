import axios from "axios"

const request = axios.create({
    baseURL:"https://hapi.fhir.tw/fhir",
    timeout: 5000,
});

request.interceptors.request.use((config)=>{
    return config;
});

request.interceptors.response.use((res)=>{
    return res.data
},(error)=>{
    return Promise.reject(new error('伺服器錯誤'));
});

export default request; 
import request from "./request";


// Patient List
export const getPatientList = () =>  {
    request({ url:'/Patient',method:'get' })
}
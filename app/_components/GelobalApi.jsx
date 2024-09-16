const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL : "http://localhost:3000" ,
    headers : {
        "Content-Type" : "application-json" ,
        
    }
})


export default axiosClient ;



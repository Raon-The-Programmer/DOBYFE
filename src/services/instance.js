import axios from "axios";

const baseurl = "https://doby.onrender.com"

const authInstance = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    }
})


export {authInstance}
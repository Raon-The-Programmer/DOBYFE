import axios from "axios";

const baseurl = "http://localhost:3001"

const authInstance = axios.create({
    baseURL:baseurl,
    timeout:4000,
    headers:{
        "Content-Type":"application/json"
    }
})


export {authInstance}
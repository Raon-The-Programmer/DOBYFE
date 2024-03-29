import axios from "axios";

//const baseurl = "http://localhost:3001"
const baseurl = "https://doby.onrender.com"

const authInstance = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    }
})



const protectedInstance = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers:{
        'Content-Type':'application/json'
    }
})


protectedInstance.interceptors.request.use(
    config=>{
        
        const loggedInUser = sessionStorage.getItem('LoggedinUser')
        //console.log(loggedInUser)
        if(loggedInUser){
        const authToken = JSON.parse(loggedInUser).Token
       // console.log(authToken)
        if(authToken){
        config.headers={
            ...config.headers,
            'Authorization':`Bearer ${authToken}`
        }}
       // console.log('Request config:', config.headers);
    
    }
    return config
    }
)

export {authInstance,protectedInstance}
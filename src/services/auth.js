import {authInstance} from "./instance"


const signUp = async(user)=>{
    try{
        const res = await authInstance.post('/user/signup',user)
        console.log(res)
        if(res.status===201){
            console.log("User Registration Completed!!")
            return res.data
        }
    }
    catch(err){
        console.log("Registration failed ",err)
    }
};

const signIn = async(user)=>{
    try{
       
        const res = await authInstance.post('/user/signin',user)
       
    
        if(res.data){
            console.log(`User ${res.data.name} Logged IN`)
            sessionStorage.setItem("LoggedinUser", JSON.stringify(res.data))
            return res.data
        }
    }
    catch(err){
        console.log("Signin Failed:( ",err)
        return null
    }
};
const forgotpassword = async({email})=>{
    try{
     const res = await authInstance.post('/user/forgotpassword',{email})
     console.log(res)
    }
    catch(err){
     console.log({Error:err})
    }
 };
 const resetPassword = async ({ userId, token, newPassword }) => {
    try {
        const res = await authInstance.post(`user/resetpassword/${userId}/${token}`, {
            userId,
            token,
            newPassword,
          });
          
      console.log(res);
    } catch (err) {
      console.log({ Error: err });
      throw err; 
    }
  };

export default {
    signUp,
    signIn,
    forgotpassword,
    resetPassword
}
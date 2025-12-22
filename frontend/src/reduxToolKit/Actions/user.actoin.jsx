import { toast } from "react-toastify"
import axios from "../../Api/config"
import { loadUser,clearUser } from "../Slices/user.slice";





export const asyncGetUser=(d)=>async (dispatch,getstate)=>{
    try {
        const res=await axios.get("/auth/user/get",{withCredentials:true})
        console.log(res.data);
        dispatch(loadUser(res.data.user))

    } catch (error) {
        // toast.error(error?.response?.data?.message)
    }
}

export const asyncUserRegister=(d)=> async(dispatch ,getstate)=>{

    try {
        
        const {data}=await axios.post("/auth/user/register",d,{withCredentials:true})

        console.log(data);

        toast.success(data.message)
        dispatch(asyncGetUser())
       

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }


}

export const asyncUserLogin=(d)=>async (dispatch,getstate)=>{
    try {

        const res=await axios.post("/auth/user/login",d,{withCredentials:true})
        console.log(res.data);
        toast.success(res.data.message)
        dispatch(asyncGetUser())

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
}

export const asyncUserLogout=()=>async(dispatch,getstate)=>{

    
    try {
        
        const res=await axios.post("/auth/user/logout")

        toast.success(res.data.message)
        dispatch(clearUser())
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
}





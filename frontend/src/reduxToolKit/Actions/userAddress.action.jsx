import { toast } from "react-toastify";
import axios from "../../Api/config"
import { loadUserAddress } from "../Slices/userAddress.slice";
import { asyncGetUser } from "./user.actoin";


export const asyncgetUserAddress=(id)=>async(dispatch,getstate)=>{
    try {


        console.log("id in userAddress action",id);
        const userAddresses=await axios.get(`/auth/user/address${id}`,{withCredentials:true})
        logconsole.log("user address from userAddress action",userAddresses);
        dispatch(loadUserAddress(userAddresses.data.getuserAddress))
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
}

export const asyncAddUserAddress=(addressdata)=>async(dispatch,getstate)=>{

    try {

        const {data}=await axios.post("/auth/user/address",addressdata,{withCredentials:true})

        console.log(data);
        dispatch(asyncGetUser())

        toast.success(data.message)
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }

}


export const asyncUpdateUserAddress=(addressId,addressdata)=>async(dispatch,getstate)=>{


    try {
        
        const {data}=await axios.patch("/auth/user/address/"+addressId,addressdata,{withCredentials:true})
        console.log(data);

        dispatch(asyncGetUser())

        toast.success(data.message)

    } catch (error) {
        return toast.error(error?.response?.data?.message)
    }
}

export const asyncDeleteUserAddress=(addressId)=>async(dispatch,getstate)=>{
    try {
        
        const {data}=await axios.delete("/auth/user/address/"+addressId,{withCredentials:true})
        console.log(data);
        dispatch(asyncGetUser())

        toast.delete(data.message)

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}






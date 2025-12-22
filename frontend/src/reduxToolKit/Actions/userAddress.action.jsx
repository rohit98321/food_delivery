import { toast } from "react-toastify";
import axios from "../../Api/config"




const asyncAddUserAddress=(addressdata)=>async(dispatch,getstate)=>{

    try {

        const {data}=await axios.post("/auth/user/address",addressdata,{withCredentials:true})

        console.log(data);

        toast.success(data.message)
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }

}


export default asyncAddUserAddress; 
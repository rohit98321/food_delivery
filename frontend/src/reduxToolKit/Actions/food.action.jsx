import { toast } from "react-toastify"
import axios from "../../Api/config"
import { loadSingleFood, loadVideos } from "../Slices/food.slice";
import { loadPartnerfoods } from "../Slices/food.slice";


export const asyncGetVideos = (details) => async (dispatch, getState) => {
    
    try {
        const res=await axios.get("/food/getall",{withCredentials:true})
        console.log("videoAction",res.data);
        dispatch(loadVideos(res.data.fooditems))
    } catch (error) {
        
    }

  };


  export const asyncGetFoodById = (id) => async (dispatch, getState) => {
    
    try {
        const res=await axios.get(`/food/getall/${id}`,{withCredentials:true})
        console.log("videoAction",res.data);
        dispatch(loadPartnerfoods(res.data.fooditems))
    } catch (error) {
        toast.error(error.response?.data?.message)
    }

  };

  export const asyncGetPatnerAllFood = () => async (dispatch, getState) => {
    
    try {
        const res=await axios.get("/food/getbyId",{withCredentials:true})
        console.log("parntnerfoods",res.data);
        dispatch(loadPartnerfoods(res.data.fooditems))
       
    } catch (error) {
        toast.error(error.response?.data?.message)
    }

  };


  export const asyncGetSingleFood=(id)=>async(dispatch,getState)=>{

    try {
        const res=await axios.get("/food/getbyId"+id,{withCredentials:true})

        dispatch(loadSingleFood(res.data.food))
        console.log("single food action",res.data);
    } catch (error) {
        toast.error(error.response?.data?.message)
    }
  }
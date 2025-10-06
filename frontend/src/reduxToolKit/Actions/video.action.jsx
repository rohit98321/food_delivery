import { toast } from "react-toastify"
import axios from "../../Api/config"
import { loadVideos } from "../Slices/video.slice";


export const asyncGetVideos = (details) => async (dispatch, getState) => {
    
    try {
        const res=await axios.get("/food/getall")
        console.log("videoAction",res.data);
        dispatch(loadVideos(res.data.fooditems))
    } catch (error) {
        
    }

  };
import  {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Slices/user.slice"
import foodPartnerReducer from "../Slices/foodPartner.slice"
import videoReducer from "../Slices/video.slice"


const store=configureStore({
    reducer:{
        user:userReducer,
        foodPartner:foodPartnerReducer,
        video: videoReducer,
    }
})

export default store
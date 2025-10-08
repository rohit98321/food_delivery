import  {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Slices/user.slice"
import foodPartnerReducer from "../Slices/foodPartner.slice"
import videoReducer from "../Slices/food.slice"


const store=configureStore({
    reducer:{
        user:userReducer,
        foodPartner:foodPartnerReducer,
        food: videoReducer,
    }
})

export default store
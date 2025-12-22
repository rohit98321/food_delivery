import  {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Slices/user.slice"
import foodPartnerReducer from "../Slices/foodPartner.slice"
import videoReducer from "../Slices/food.slice"
import userAddressReducer from "../Slices/userAddress.slice"


const store=configureStore({
    reducer:{
        user:userReducer,
        foodPartner:foodPartnerReducer,
        food: videoReducer,
        userAddress:userAddressReducer,
    }
})

export default store
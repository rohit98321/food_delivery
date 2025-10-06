import  { createSlice } from "@reduxjs/toolkit";

const initialState={
    foodPartner:""
}

const foodPartnerSlice=createSlice({
    name:"foodPartner",
    initialState,
    reducers:{
        loadfoodPartner:(state,action)=>{
                state.foodPartner=action.payload
                console.log('foodpartner',state.foodPartner);
        },
        clearfoodPartner:(state,action)=>{
            state.foodPartner=null
        }
    }
})

export const {loadfoodPartner,clearfoodPartner}=foodPartnerSlice.actions
export default foodPartnerSlice.reducer


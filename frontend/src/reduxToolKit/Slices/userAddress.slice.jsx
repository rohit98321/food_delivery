import  { createSlice } from "@reduxjs/toolkit";


const initialState={
    userAddress:""
}

const userAddressSlice=createSlice({
    name:"userAddress",
    initialState,
    reducers:{
        loadUserAddress:(state,action)=>{
            state.userAddress=action.payload
            console.log(state.userAddress);

        },
        clearUserAddress:(state,action)=>{
            state.userAddress=null
        }
    }
})

export const {loadUserAddress,clearUserAddress}=userAddressSlice.actions
export default userAddressSlice.reducer
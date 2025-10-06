import  { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loadUser:(state,action)=>{
            state.user=action.payload
            console.log(state.user);

        },
        clearUser:(state,action)=>{
            state.user=null
        }
    }
})

export const {loadUser,clearUser}=userSlice.actions
export default userSlice.reducer
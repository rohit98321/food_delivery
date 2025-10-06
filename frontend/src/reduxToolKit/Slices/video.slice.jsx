import  { createSlice } from "@reduxjs/toolkit";

const initialState={
    videos:[],
    currentIndex:0

}

const videoSlice=createSlice({
    name:"video",
    initialState,
    reducers:{
        loadVideos:(state,action)=>{
                state.videos=action.payload  
                console.log(state.videos);   
        },
        setCurrentIndex:(state,action)=>{
            state.videos=action.payload     
    }
       
    }
})

export const {loadVideos,setCurrentIndex}=videoSlice.actions
export default videoSlice.reducer


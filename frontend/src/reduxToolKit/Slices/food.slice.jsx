import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  currentIndex: 0,
  partnerFoods: [],
  singleFood:""
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    loadVideos: (state, action) => {
      state.videos = action.payload;
      console.log(state.videos);
    },
    setCurrentIndex: (state, action) => {
      state.videos = action.payload;
    },
    loadPartnerfoods: (state, action) => {
      state.partnerFoods = action.payload;
      console.log(state.partnerFoods);
    },
    loadSingleFood:(state,action)=>{
        state.singleFood=action.payload
    }
  },
});

export const { loadVideos, setCurrentIndex,loadSingleFood, loadPartnerfoods } =
  videoSlice.actions;
export default videoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
     showGPtSerach:false,
    },
    reducers:{
     toggleGptSearchView:(state)=>{
      state.showGPtSerach=!state.showGPtSerach;
     },
    },
});

export const {toggleGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;
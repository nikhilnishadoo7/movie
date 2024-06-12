import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData: [],
    imageURL:""
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload; // Use consistent property name
        },
        setImageURL:(state,action)=>{
            state.imageURL=action.payload
        }
    }
});

// Correct export of action
export const { setBannerData,setImageURL } = movieSlice.actions;

// Correct export of reducer
export default movieSlice.reducer;

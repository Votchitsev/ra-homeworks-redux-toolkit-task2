import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imagesList: {
    profile: null,
    container: []
  }
}

export const images = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImageToProfile: (state, action) => {
      state.imagesList.profile = action.payload;
    },
    addImageToContainer: (state) => {
      state.imagesList.container.push(state.imagesList.profile);
    } 
  }
})

export const { addImageToProfile, addImageToContainer } = images.actions

export default images.reducer;

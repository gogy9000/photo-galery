import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../DAL/API";

const getPhotos=createAsyncThunk<string[],void>
("photoGallerySlice/getPhotos",async ()=>{
    try {
     return   await API.getPhotos()
    }catch (e) {
        return e
    }
})


const photoGallerySlice=createSlice({
    name:"photoGallerySlice",
    initialState:{
        getPhotosResponseData:[] as string[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getPhotos.fulfilled,(state, action)=>{
                state.getPhotosResponseData=action.payload
            })
    }

})
export const photoGalleryReducer=photoGallerySlice.reducer
export const photoGalleryThunks={getPhotos}
import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {API} from "../DAL/API";
import {GetPhotosItemReturnType, getPhotosParamsType} from "../DAL/types";

const getPhotos = createAsyncThunk<GetPhotosItemReturnType[], getPhotosParamsType>
("photoGallerySlice/getPhotos", async (params) => {
    try {
        return await API.getPhotos(params)
    } catch (e) {
        return e
    }
})

const photoGallerySlice = createSlice({
    name: "photoGallerySlice",
    initialState: {
        getPhotosResponseData: [] as GetPhotosItemReturnType[],
        selectedPhotoUrl: null as string | null,
        errors:[] as  SerializedError[],
        isFetching:true
    },
    reducers: {
        addSelectedPhotoUrl:(state, action:PayloadAction<string|null>)=>{
            state.selectedPhotoUrl=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.isFetching=true
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.getPhotosResponseData.push(...action.payload)
                state.isFetching=false
            })
            .addCase(getPhotos.rejected, (state, action) => {
                state.errors.push(action.error)
                state.isFetching=false
            })
    }
})

export const photoGalleryReducer = photoGallerySlice.reducer
export const photoGalleryActions=photoGallerySlice.actions
export const photoGalleryThunks = {getPhotos}
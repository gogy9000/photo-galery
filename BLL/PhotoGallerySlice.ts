import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {API} from "../DAL/API";
import {GetPhotosItemReturnType, getPhotosParamsType} from "../DAL/types";
import {AppRootStateType} from "./store";

const getPhotos = createAsyncThunk<GetPhotosItemReturnType[], void>
("photoGallerySlice/getPhotos", async (params,{getState}) => {
    const state=getState() as AppRootStateType
    try {
        return await API.getPhotos(state.photoGalleryReducer.getPhotosParams)
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
        getPhotosParams:{page:1,per_page:29,order_by:"latest"} as getPhotosParamsType
    },
    reducers: {
        addSelectedPhotoUrl:(state, action:PayloadAction<string|null>)=>{
            state.selectedPhotoUrl=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.getPhotosResponseData.push(...action.payload)
                state.getPhotosParams.page+=1
            })
            .addCase(getPhotos.rejected, (state, action) => {
                state.errors.push(action.error)
            })
    }
})

export const photoGalleryReducer = photoGallerySlice.reducer
export const photoGalleryActions=photoGallerySlice.actions
export const photoGalleryThunks = {getPhotos}
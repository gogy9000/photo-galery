import {configureStore} from "@reduxjs/toolkit";
import {photoGalleryReducer} from "./PhotoGallerySlice";

export const setupStore=configureStore({
    reducer:{
        photoGalleryReducer,

    }

})

export type AppRootStateType =ReturnType<typeof setupStore.getState>
export type AppDispatchType=typeof setupStore.dispatch
import {configureStore} from "@reduxjs/toolkit";
import {API} from "../DAL/API";

export const setupStore=configureStore({
    reducer:{
        [API.reducerPath]:API.reducer
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(API.middleware)
})

export type AppRootStateType =ReturnType<typeof setupStore.getState>
export type AppDispatchType=typeof setupStore.dispatch